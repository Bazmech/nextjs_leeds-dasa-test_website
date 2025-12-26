// Environment Agency monitoring stations for Leeds DASA waters
// Station IDs can be found at: https://environment.data.gov.uk/flood-monitoring/id/stations

export const riverStations = {
  // River Aire stations
  "aire-beal": {
    stationId: "F1902",
    stationName: "Ferrybridge",
    river: "River Aire",
  },
  "aire-ferrybridge": {
    stationId: "F1902",
    stationName: "Ferrybridge",
    river: "River Aire",
  },
  "aire-stockbridge": {
    stationId: "F1908",
    stationName: "Riddlesden",
    river: "River Aire",
  },
  "aire-south-accommodation-road": {
    stationId: "F1906",
    stationName: "Knostrop",
    river: "River Aire",
  },
  "aire-gibraltar-island": {
    stationId: "F1906",
    stationName: "Knostrop",
    river: "River Aire",
  },
  "aire-chapel-haddlesey": {
    stationId: "F1903",
    stationName: "Chapel Haddlesey",
    river: "River Aire",
  },
  "aire-west-haddlesey": {
    stationId: "F1903",
    stationName: "Chapel Haddlesey",
    river: "River Aire",
  },
  // River Derwent stations
  "derwent-kexby": {
    stationId: "F2201",
    stationName: "Stamford Bridge",
    river: "River Derwent",
  },
  "derwent-sutton": {
    stationId: "F2202",
    stationName: "Elvington",
    river: "River Derwent",
  },
  "derwent-low-catton": {
    stationId: "F2201",
    stationName: "Stamford Bridge",
    river: "River Derwent",
  },
  // River Nidd stations
  "nidd-ramsgill": {
    stationId: "F1605",
    stationName: "Lofthouse",
    river: "River Nidd",
  },
  "nidd-hammerton": {
    stationId: "F1602",
    stationName: "Skip Bridge",
    river: "River Nidd",
  },
  "nidd-moor-monkton": {
    stationId: "F1602",
    stationName: "Skip Bridge",
    river: "River Nidd",
  },
  "nidd-skip-bridge": {
    stationId: "F1602",
    stationName: "Skip Bridge",
    river: "River Nidd",
  },
  // River Ouse stations
  "ouse-hunters-lodge": {
    stationId: "F2005",
    stationName: "Aldwark Bridge",
    river: "River Ouse",
  },
  "ouse-linton": {
    stationId: "F2005",
    stationName: "Aldwark Bridge",
    river: "River Ouse",
  },
  // River Swale stations
  "swale-asenby": {
    stationId: "F2102",
    stationName: "Pickhill",
    river: "River Swale",
  },
  "swale-helperby": {
    stationId: "F2105",
    stationName: "Crakehill",
    river: "River Swale",
  },
  "swale-myton": {
    stationId: "F2104",
    stationName: "Myton Bridge",
    river: "River Swale",
  },
  "swale-pickhill": {
    stationId: "F2102",
    stationName: "Pickhill",
    river: "River Swale",
  },
  // River Ure stations
  "ure-middleham": {
    stationId: "F2302",
    stationName: "Middleham Bridge",
    river: "River Ure",
  },
  "ure-lower-dunsforth": {
    stationId: "F2304",
    stationName: "Westwick Lock",
    river: "River Ure",
  },
  "ure-aldwark-bridge": {
    stationId: "F2005",
    stationName: "Aldwark Bridge",
    river: "River Ure",
  },
  "ure-aldwark-left-bank": {
    stationId: "F2005",
    stationName: "Aldwark Bridge",
    river: "River Ure",
  },
  // River Wharfe stations
  "wharfe-easedike": {
    stationId: "F1704",
    stationName: "Tadcaster",
    river: "River Wharfe",
  },
  "wharfe-linton": {
    stationId: "F1706",
    stationName: "Wetherby",
    river: "River Wharfe",
  },
  "wharfe-kearby": {
    stationId: "F1706",
    stationName: "Wetherby",
    river: "River Wharfe",
  },
  "wharfe-pool": {
    stationId: "F1702",
    stationName: "Otley",
    river: "River Wharfe",
  },
  "wharfe-ulleskelf": {
    stationId: "F1704",
    stationName: "Tadcaster",
    river: "River Wharfe",
  },
};

// Fetch river level data from Environment Agency API
export async function fetchRiverLevel(stationId) {
  try {
    const response = await fetch(
      `https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}`,
      { next: { revalidate: 900 } } // Cache for 15 minutes
    );

    if (!response.ok) {
      throw new Error("Failed to fetch river data");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching river level:", error);
    return null;
  }
}

// Fetch latest reading for a station
export async function fetchLatestReading(stationId) {
  try {
    const response = await fetch(
      `https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}/readings?_sorted&_limit=1`,
      { next: { revalidate: 900 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reading");
    }

    const data = await response.json();
    return data.items?.[0] || null;
  } catch (error) {
    console.error("Error fetching latest reading:", error);
    return null;
  }
}

// Fetch readings for the last 24 hours
export async function fetchRecentReadings(stationId, hours = 24) {
  try {
    const since = new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
    const response = await fetch(
      `https://environment.data.gov.uk/flood-monitoring/id/stations/${stationId}/readings?since=${since}&_sorted`,
      { next: { revalidate: 900 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch readings");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching recent readings:", error);
    return [];
  }
}

