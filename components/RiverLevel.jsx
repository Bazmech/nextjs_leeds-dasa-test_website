"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Waves,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  RefreshCw,
  Clock,
  Droplets,
} from "lucide-react";

// Vertical gauge showing current level vs typical range
function LevelGauge({ currentLevel, typicalHigh, typicalLow }) {
  if (!typicalHigh || !typicalLow) return null;

  // Calculate gauge parameters
  const range = typicalHigh - typicalLow;
  const padding = range * 0.5; // Add 50% padding above and below
  const gaugeMin = Math.max(0, typicalLow - padding);
  const gaugeMax = typicalHigh + padding;
  const gaugeRange = gaugeMax - gaugeMin;

  // Calculate positions as percentages (from bottom)
  const currentPos = ((currentLevel - gaugeMin) / gaugeRange) * 100;
  const typicalHighPos = ((typicalHigh - gaugeMin) / gaugeRange) * 100;
  const typicalLowPos = ((typicalLow - gaugeMin) / gaugeRange) * 100;

  // Determine status
  const isHigh = currentLevel > typicalHigh;
  const isLow = currentLevel < typicalLow;
  const statusColor = isHigh ? 'bg-red-500' : isLow ? 'bg-blue-500' : 'bg-green-500';

  return (
    <div className="flex items-stretch gap-3 p-3 bg-white/50 rounded-xl">
      {/* Gauge bar */}
      <div className="relative w-8 h-32 rounded-lg overflow-hidden bg-gradient-to-b from-red-200 via-green-200 to-blue-200">
        {/* High zone (red) */}
        <div 
          className="absolute left-0 right-0 top-0 bg-red-400/60"
          style={{ height: `${100 - typicalHighPos}%` }}
        />
        
        {/* Normal zone (green) */}
        <div 
          className="absolute left-0 right-0 bg-green-400/60"
          style={{ 
            top: `${100 - typicalHighPos}%`,
            height: `${typicalHighPos - typicalLowPos}%`
          }}
        />
        
        {/* Low zone (blue) */}
        <div 
          className="absolute left-0 right-0 bottom-0 bg-blue-400/60"
          style={{ height: `${typicalLowPos}%` }}
        />

        {/* Current level marker */}
        <div 
          className={`absolute left-0 right-0 h-1.5 ${statusColor} shadow-lg`}
          style={{ bottom: `${Math.min(100, Math.max(0, currentPos))}%`, transform: 'translateY(50%)' }}
        >
          <div className={`absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 ${statusColor} rotate-45`} />
        </div>

        {/* Typical high line */}
        <div 
          className="absolute left-0 right-0 h-px bg-red-600 border-t border-dashed border-red-600"
          style={{ bottom: `${typicalHighPos}%` }}
        />

        {/* Typical low line */}
        <div 
          className="absolute left-0 right-0 h-px bg-blue-600 border-t border-dashed border-blue-600"
          style={{ bottom: `${typicalLowPos}%` }}
        />
      </div>

      {/* Labels */}
      <div className="flex flex-col justify-between text-xs py-1 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-red-600 font-medium">{typicalHigh.toFixed(2)}m</span>
          <span className="text-river-400">High</span>
        </div>
        
        <div className="flex items-center">
          <span className={`font-display text-2xl font-bold ${isHigh ? 'text-red-600' : isLow ? 'text-blue-600' : 'text-green-600'}`}>
            {currentLevel.toFixed(2)}m
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-blue-600 font-medium">{typicalLow.toFixed(2)}m</span>
          <span className="text-river-400">Low</span>
        </div>
      </div>
    </div>
  );
}

export default function RiverLevel({ stationId, stationName, riverName }) {
  const [data, setData] = useState(null);
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [htmlUrl, setHtmlUrl] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch station info and latest reading
      const [stationRes, readingsRes] = await Promise.all([
        fetch(
          `https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}`
        ),
        fetch(
          `https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}/readings?_sorted&_limit=48&parameter=level`
        ),
      ]);

      if (!stationRes.ok || !readingsRes.ok) {
        throw new Error("Failed to fetch data");
      }

      const stationData = await stationRes.json();
      const readingsData = await readingsRes.json();

      setData(stationData.items);
      setReadings(readingsData.items || []);
      setLastUpdated(new Date());

      // Extract HTML format URL from meta.hasFormat
      if (stationData.meta?.hasFormat) {
        const htmlFormat = stationData.meta.hasFormat.find(
          (url) => url.endsWith(".html")
        );
        if (htmlFormat) {
          setHtmlUrl(htmlFormat);
        }
      }
    } catch (err) {
      setError("Unable to load river level data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Refresh every 15 minutes
    const interval = setInterval(fetchData, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [stationId]);

  // Calculate trend from recent readings
  const getTrend = () => {
    if (readings.length < 2) return "stable";
    const latest = readings[0]?.value;
    const previous = readings[Math.min(5, readings.length - 1)]?.value;
    if (!latest || !previous) return "stable";

    const diff = latest - previous;
    if (diff > 0.05) return "rising";
    if (diff < -0.05) return "falling";
    return "stable";
  };

  // Get level status
  const getLevelStatus = () => {
    if (!data?.stageScale) return null;
    const latest = readings[0]?.value;

    if (!latest) return null;

    const typicalHigh = data.stageScale.typicalRangeHigh;
    const typicalLow = data.stageScale.typicalRangeLow;

    if (typicalHigh && latest > typicalHigh) {
      return { status: "high", color: "text-orange-500", bg: "bg-orange-50" };
    }
    if (typicalLow && latest < typicalLow) {
      return { status: "low", color: "text-blue-500", bg: "bg-blue-50" };
    }
    return { status: "normal", color: "text-green-500", bg: "bg-green-50" };
  };

  const trend = getTrend();
  const levelStatus = getLevelStatus();
  const latestReading = readings[0];

  if (loading) {
    return (
      <div className="bg-river-50 rounded-2xl p-6 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-river-200 rounded-lg" />
          <div className="h-5 w-32 bg-river-200 rounded" />
        </div>
        <div className="h-12 bg-river-200 rounded mb-4" />
        <div className="h-4 w-24 bg-river-200 rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-river-50 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-river-200 flex items-center justify-center">
            <Waves className="w-5 h-5 text-river-500" />
          </div>
          <h3 className="font-display text-lg font-bold text-river-900">
            River Level
          </h3>
        </div>
        <p className="text-river-500 text-sm mb-4">{error}</p>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 text-sunset-700 text-sm font-medium hover:text-sunset-800"
        >
          <RefreshCw className="w-4 h-4" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-river-50 to-blue-50 rounded-2xl p-6 border border-river-100"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-river-900">
              River Level
            </h3>
            <p className="text-river-500 text-xs">{stationName} Station</p>
          </div>
        </div>
        <button
          onClick={fetchData}
          className="p-2 hover:bg-white/50 rounded-lg transition-colors"
          title="Refresh"
        >
          <RefreshCw className="w-4 h-4 text-river-500" />
        </button>
      </div>

      {/* Status and trend indicator */}
      {latestReading && (
        <div className="flex items-center justify-between mb-4">
          {/* Level status badge */}
          {levelStatus && (
            <span className={`px-2 py-1 rounded text-white text-xs font-medium ${
              levelStatus.status === 'high' ? 'bg-orange-500' : 
              levelStatus.status === 'low' ? 'bg-blue-500' : 'bg-green-500'
            }`}>
              {levelStatus.status === 'high' ? 'High' : 
               levelStatus.status === 'low' ? 'Low' : 'Normal'}
            </span>
          )}

          {/* Trend indicator - right aligned */}
          <div className="ml-auto">
            {trend === "rising" && (
              <div className="flex items-center gap-1 text-orange-500">
                <TrendingUp className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Rising</span>
              </div>
            )}
            {trend === "falling" && (
              <div className="flex items-center gap-1 text-blue-500">
                <TrendingDown className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Falling</span>
              </div>
            )}
            {trend === "stable" && (
              <div className="flex items-center gap-1 text-green-500">
                <Minus className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">Stable</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Vertical Level Gauge */}
      {latestReading && data?.stageScale && (
        <div className="mb-4">
          <LevelGauge 
            currentLevel={latestReading.value}
            typicalHigh={data.stageScale.typicalRangeHigh}
            typicalLow={data.stageScale.typicalRangeLow}
          />
        </div>
      )}

      {/* Mini chart - hourly readings (every 4th reading since data is every 15 mins) */}
      {readings.length > 1 && (
        <div className="mb-4">
          <div className="flex items-end gap-1 h-12">
            {readings
              .filter((_, index) => index % 4 === 0) // Get hourly readings
              .slice(0, 12)
              .reverse()
              .map((reading, i, arr) => {
                const hourlyReadings = readings.filter((_, index) => index % 4 === 0).slice(0, 12);
                const min = Math.min(...hourlyReadings.map((r) => r.value));
                const max = Math.max(...hourlyReadings.map((r) => r.value));
                const range = max - min || 1;
                const height = ((reading.value - min) / range) * 100;
                return (
                  <div
                    key={i}
                    className="flex-1 bg-blue-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                    style={{ height: `${Math.max(20, height)}%` }}
                    title={`${reading.value.toFixed(3)}m`}
                  />
                );
              })}
          </div>
          <div className="flex justify-between text-xs text-river-400 mt-1">
            <span>12 hrs ago</span>
            <span>Now</span>
          </div>
        </div>
      )}

      {/* Last updated */}
      {lastUpdated && (
        <div className="flex items-center gap-1.5 text-river-400 text-xs">
          <Clock className="w-3 h-3" />
          <span>
            Updated{" "}
            {latestReading?.dateTime
              ? new Date(latestReading.dateTime).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "recently"}
          </span>
        </div>
      )}

      {/* Link to EA website */}
      {htmlUrl && (
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-center text-sm text-sunset-700 hover:text-sunset-800 font-medium"
        >
          View on Environment Agency →
        </a>
      )}
    </motion.div>
  );
}

