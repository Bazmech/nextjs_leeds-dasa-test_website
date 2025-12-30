// Navigation data
export const navigation = [
  {
    name: "Membership",
    href: "/membership",
    children: [
      { name: "Individual", href: "/membership/individual" },
      { name: "Yearbook", href: "/membership/yearbook" },
      { name: "Club Affiliation", href: "/membership/club-affiliation" },
    ],
  },
  {
    name: "Waters",
    href: "/waters",
    children: [
      { name: "Rivers", href: "/waters/rivers" },
      { name: "Canals", href: "/waters/canals" },
      { name: "Lakes", href: "/waters/lakes" },
      { name: "Waters A-Z", href: "/waters/a-z" },
    ],
  },
  {
    name: "Matches",
    href: "/matches",
    children: [
      { name: "Match Calendar", href: "/matches/calendar" },
      { name: "Club Meetings", href: "/matches/meetings" },
    ],
  },
  { name: "Anglers Club", href: "/anglers-club" },
  { name: "Contact Us", href: "/contact" },
  { name: "Forum", href: "/forum" },
];

// Waters data - Based on https://www.leedsdasa.co.uk/waters-rivers.php
export const rivers = [
  // River Aire stretches
  {
    id: "aire-beal",
    name: "River Aire - Beal",
    postcode: "DN14 0SL",
    description:
      "From the A1 go into Monk Fryston village and turn right at the derelict garage. Go to the end of the road and turn left. After approximately 1½ miles turn right into Birkin. Go through Birkin to the Bridge at Beal where cars can be parked. Parking also available on the riverbank. Fishing on the left bank.",
    image: "/images/rivers/aire-beal.jpg",
    species: ["Chub", "Roach", "Bream", "Pike", "Perch"],
    facilities: ["Roadside parking", "Riverbank parking"],
  },
  {
    id: "aire-ferrybridge",
    name: "River Aire - Ferrybridge",
    postcode: "WF11 8PQ",
    description:
      "River Aire. Left bank commences approximately 100 yards below A1 road bridge for approximately 500 yards downstream. Also right bank from canal mouth upstream to Golden Lion Pub.",
    image: "/images/rivers/aire-ferrybridge.jpg",
    species: ["Chub", "Roach", "Perch", "Pike", "Bream", "Barbel"],
    facilities: ["Car parking", "Easy access"],
  },
  {
    id: "aire-stockbridge",
    name: "River Aire - Stockbridge",
    postcode: "LS26 8PL",
    description:
      "River Aire, Riddlesden, Keighley, left bank, from golf course to cricket field. Entry via Bar Lane. Cross canal bridge, turn left, turn left again re-cross canal, down canal bank and take lane entry to fishing. Two matches allowed. Short length at top end for pleasure fishing only. Owned outright by the Society.",
    image: "/images/rivers/aire-stockbridge.jpg",
    species: ["Chub", "Roach", "Perch", "Dace", "Trout"],
    facilities: ["Car parking", "Match venue"],
  },
  {
    id: "aire-south-accommodation-road",
    name: "River Aire - South Accommodation Road",
    postcode: "LS26 8PL",
    description:
      "Coarse and Trout Venue. River Aire. Left bank, downstream from South Accommodation Road from top limit to footbridge. Limited back street parking on Old Mill Lane but can be reached from Thwaites Mill length.",
    image: "/images/rivers/aire-south-accommodation.jpg",
    species: ["Chub", "Roach", "Trout", "Perch", "Dace"],
    facilities: ["Limited parking", "Footpath access"],
  },
  {
    id: "aire-gibraltar-island",
    name: "River Aire - Gibraltar Island to Thwaites Mill",
    postcode: "LS26 8PL",
    description:
      "Coarse and Trout Venue. River Aire. Right bank, downstream from Gibraltar Island to Thwaite Mill. Low Rd, Thwaite Gate. Take first left after Crooked Billet into Thwaite Lane 200 yds turn left into carpark, over lock and follow trans pennine path for Island. Fishing right bank between two weirs. No access or fishing in Mill grounds.",
    image: "/images/rivers/aire-gibraltar.jpg",
    species: ["Chub", "Roach", "Trout", "Perch", "Barbel"],
    facilities: ["Car parking", "Trans Pennine Trail access"],
  },
  {
    id: "aire-chapel-haddlesey",
    name: "River Aire - Chapel Haddlesey",
    postcode: "YO8 8QA",
    description:
      "River Aire, Chapel Haddlesey. Pegs 1 to 41 on the right bank opposite West Haddlesey. Pegs 42 to 60 are on the left bank from Selby lock to the entrance downstream.",
    image: "/images/rivers/aire-chapel-haddlesey.jpg",
    species: ["Bream", "Roach", "Chub", "Pike", "Perch"],
    facilities: ["Car parking", "60 pegs", "Match venue"],
  },
  {
    id: "aire-west-haddlesey",
    name: "River Aire - West Haddlesey",
    postcode: "YO8 8PZ",
    description:
      "Left Bank 1.5km. From the A19 head towards West Haddlesey. On leaving the village turn left down Marsh Lane. At the fork in the road go right which takes you to the flood bank. Drive along the flood bank and park behind your peg.",
    image: "/images/rivers/aire-west-haddlesey.jpg",
    species: ["Bream", "Roach", "Chub", "Pike", "Perch"],
    facilities: ["Flood bank parking", "1.5km stretch"],
  },
  // River Derwent stretches
  {
    id: "derwent-kexby",
    name: "River Derwent - Kexby (Downstream)",
    postcode: "YO41 5LD",
    description:
      "Start from beck approximately 100 yards below Old Bridge, left bank, one mile downstream. One match allowed. Part owned by the Society. Park as for Low Catton.",
    image: "/images/rivers/derwent-kexby.jpg",
    species: ["Chub", "Roach", "Dace", "Pike", "Perch"],
    facilities: ["Car parking", "1 mile stretch", "Match venue"],
  },
  {
    id: "derwent-sutton",
    name: "River Derwent - Sutton on Derwent",
    postcode: "YO41 4DQ",
    description:
      "Approximately one and a half miles above the weir. This section is jointly held with York and District AA. Private car park for members provided on the right, adjacent to the river between the roadbridge and the water mill. Gated public footpath gives access to upstream of the bridge.",
    image: "/images/rivers/derwent-sutton.jpg",
    species: ["Chub", "Roach", "Dace", "Barbel", "Pike"],
    facilities: ["Private car park", "1.5 mile stretch"],
  },
  {
    id: "derwent-low-catton",
    name: "River Derwent - Low Catton",
    postcode: "YO41 1EA",
    description:
      "Both banks from fence above weir to sign approximately 500 yards downstream. Left bank below weir - Approach down Catton Lane from village. Parking through hedgerow 200 yards down Catton Lane. Owned outright by the Society. No matches. Fishing allowed until 11pm.",
    image: "/images/rivers/derwent-low-catton.jpg",
    species: ["Chub", "Roach", "Dace", "Pike", "Perch"],
    facilities: ["Car parking", "Night fishing until 11pm"],
  },
  // River Nidd stretches
  {
    id: "nidd-ramsgill",
    name: "River Nidd - Ramsgill",
    postcode: "HG3 5RL",
    description:
      "Coarse and Trout Venue. From Howe Stean Beck. Both banks to bridge then right bank downstream for approx 1.5 miles with exception of one small field. Parking at Howe Stean Gorge available for small charge. No vehicles must cross steel footbridge at lower end. Owned outright by Society.",
    image: "/images/rivers/nidd-ramsgill.jpg",
    species: ["Trout", "Grayling", "Chub", "Dace"],
    facilities: ["Paid parking at Howe Stean Gorge", "1.5 mile stretch"],
  },
  {
    id: "nidd-hammerton",
    name: "River Nidd - Hammerton",
    postcode: "YO26 8DB",
    description:
      "Anglers only allowed on this Fishery. Four matches allowed. Left bank. Mill top left free Saturday only. Vehicles must be parked in Mill Lane on right-hand side. No vehicles allowed down to Mill. From first field above Dam, downstream to railway Bridge. Owned outright by the Society.",
    image: "/images/rivers/nidd-hammerton.jpg",
    species: ["Chub", "Roach", "Dace", "Barbel", "Pike"],
    facilities: ["Mill Lane parking", "Match venue"],
  },
  {
    id: "nidd-moor-monkton",
    name: "River Nidd - Moor Monkton",
    postcode: "YO26 8JB",
    description:
      "Right bank approx 1200 metres upstream from where the Nidd enters the Ouse. Parking only in the 2 designated car park compounds as per venue map. Cars must not be parked anywhere else. Fishing allowed up until 11pm.",
    image: "/images/rivers/nidd-moor-monkton.jpg",
    species: ["Chub", "Roach", "Dace", "Barbel", "Pike"],
    facilities: [
      "Designated parking",
      "Night fishing until 11pm",
      "1.2km stretch",
    ],
  },
  {
    id: "nidd-skip-bridge",
    name: "River Nidd - Skip Bridge",
    postcode: "YO26 8EZ",
    description:
      "From Railway Bridge, left bank down to old road bridge. Two match lengths. From Old Bridge, right bank approx 1 mile downstream. One match length. Parking at Lay-by Skip Bridge. Fishing allowed on this venue until 11pm.",
    image: "/images/rivers/nidd-skip-bridge.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Lay-by parking", "Night fishing until 11pm", "Match venue"],
  },
  // River Ouse stretches
  {
    id: "ouse-hunters-lodge",
    name: "River Ouse - Hunters Lodge",
    postcode: "YO30 2AH",
    description:
      "River Ouse. Left bank. Commencing at Notice Board about ¾ mile below Aldwark Bridge down to Notice Board four fields below. Entrance on road side half way from Aldwark to Linton. Permanent pegs No 164 to 231. Park vehicles on grass verge clear of road.",
    image: "/images/rivers/ouse-hunters-lodge.jpg",
    species: ["Bream", "Roach", "Chub", "Pike", "Perch"],
    facilities: ["Roadside parking", "Pegged swims"],
  },
  {
    id: "ouse-linton",
    name: "River Ouse - Linton-on-Ouse (Top)",
    postcode: "YO30 2AX",
    description:
      "Two fields, left bank downstream of Hunters Lodge. Entry indicated by notice board. Permanent Pegs No 232 to 263. Anglers only.",
    image: "/images/rivers/ouse-linton.jpg",
    species: ["Bream", "Roach", "Chub", "Pike", "Perch"],
    facilities: ["Notice board access", "Pegged swims"],
  },
  // River Swale stretches
  {
    id: "swale-asenby",
    name: "River Swale - Asenby",
    postcode: "YO7 3RA",
    description:
      "River Swale, right bank, approximately 1000 yards. One match allowed. No approach must be made to the farm. Entry clearly sign-posted, and limit signs at each length. Park clear of road. Fishing allowed until 11pm.",
    image: "/images/rivers/swale-asenby.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Roadside parking", "Night fishing until 11pm", "Match venue"],
  },
  {
    id: "swale-helperby",
    name: "River Swale - Helperby",
    postcode: "YO61 2NU",
    description:
      "No anglers allowed on fishery before 7.00am. Any member being on the Helperby fishery before 7.00am will be fined a minimum of £20.00. No wading. On right bank from Brafferton Bridge towards Myton Plantation. Official Car Park at Oak Tree Public House - £1.00 per car.",
    image: "/images/rivers/swale-helperby.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Pub car park (£1)", "No early access before 7am"],
  },
  {
    id: "swale-myton",
    name: "River Swale - Myton",
    postcode: "YO61 4AH",
    description:
      "From Notice Board 50 yards above Myton Bridge down to first fence below Myton Bridge left bank. Myton left bank owned outright by Society. One match only allowed. Anglers only.",
    image: "/images/rivers/swale-myton.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Perch"],
    facilities: ["Limited parking", "Match venue"],
  },
  {
    id: "swale-pickhill",
    name: "River Swale - Pickhill",
    postcode: "YO7 4JL",
    description:
      "Coarse and Trout Venue. One kilometre of classic Swale on the right bank at Pickhill. Approaching Pickhill C of E school, turn left down Lowfields Lane. From October to March no access by vehicle down the field. Room for 4 cars only.",
    image: "/images/rivers/swale-pickhill.jpg",
    species: ["Trout", "Chub", "Barbel", "Roach", "Grayling"],
    facilities: ["Limited parking (4 cars)", "1km stretch"],
  },
  // River Ure stretches
  {
    id: "ure-middleham",
    name: "River Ure - Middleham & Harmby",
    postcode: "DL8 5HE",
    description:
      "Coarse and Trout Venue. On left bank field above Iron Bridge and approximately 1 mile below Iron Bridge to stone wall. On left bank approximately 1 mile above Iron Bridge to Beck. On right bank approximately 1 mile above Iron Bridge. Parking on grass margins on Leyburn side of iron bridge and at Harmby House Farm.",
    image: "/images/rivers/ure-middleham.jpg",
    species: ["Trout", "Grayling", "Chub", "Barbel", "Dace"],
    facilities: ["Roadside parking", "Farm parking available"],
  },
  {
    id: "ure-lower-dunsforth",
    name: "River Ure - Lower Dunsforth",
    postcode: "YO26 9SA",
    description:
      "Right bank as per venue map. Parking may be available (not Sundays) in the Car Park of the Dunsforth Pub with prior approval of the landlord.",
    image: "/images/rivers/ure-lower-dunsforth.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Pub car park (with permission)", "Not Sundays"],
  },
  {
    id: "ure-aldwark-bridge",
    name: "River Ure - Aldwark Bridge",
    postcode: "YO26 9SJ",
    description:
      "From bridge upstream to top of golf course. Permanent peg numbers 115 to 163, right bank. Park on left, just before bridge. Owned by the Society.",
    image: "/images/rivers/ure-aldwark-bridge.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Bream"],
    facilities: ["Bridge parking", "Pegged swims"],
  },
  {
    id: "ure-aldwark-left-bank",
    name: "River Ure - Aldwark Left Bank",
    postcode: "YO61 1UB",
    description:
      "Length 1 - Second field upstream of Toll Bridge to start of golf course. Length 2 - Enter field through Aldwark Arms car park. Further 3 fields upstream to double fence limit. Fishing allowed until 11pm.",
    image: "/images/rivers/ure-aldwark-left.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Aldwark Arms car park", "Night fishing until 11pm"],
  },
  // River Wharfe stretches
  {
    id: "wharfe-easedike",
    name: "River Wharfe - Easedike",
    postcode: "LS24 8BE",
    description:
      "Above Tadcaster (Left Bank). Approximately 2 miles above the footbridge at Easedike, and down to the first field above the park wall. One match only above Beck. Entrance by main road to Easedike Farm. ANGLERS ARE NOT ALLOWED TO TAKE A SHORT-CUT THROUGH THE PARKLAND.",
    image: "/images/rivers/wharfe-easedike.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Trout"],
    facilities: ["Farm access", "Match venue"],
  },
  {
    id: "wharfe-linton",
    name: "River Wharfe - Linton",
    postcode: "LS22 4HT",
    description:
      "Coarse and Trout Venue. Entry situated approximately ½ mile above Linton Bridge, along Linton Common. ½ mile of fishing. Parking for 5 cars on the triangle outside the garden centre. Tackle may be dropped off but cars must return to car park. Owned outright by Society. No matches allowed.",
    image: "/images/rivers/wharfe-linton.jpg",
    species: ["Trout", "Grayling", "Chub", "Barbel", "Dace"],
    facilities: ["Limited parking (5 cars)", "No matches"],
  },
  {
    id: "wharfe-kearby",
    name: "River Wharfe - Kearby",
    postcode: "LS22 4BU",
    description:
      "Coarse and Trout Venue. 800 metres left bank. Parking is available in the field at the side of the river but an off road vehicle will be required to drive down the track. Please do not park down Pasture Lane.",
    image: "/images/rivers/wharfe-kearby.jpg",
    species: ["Trout", "Grayling", "Chub", "Barbel", "Dace"],
    facilities: ["Field parking (4x4 recommended)", "800m stretch"],
  },
  {
    id: "wharfe-pool",
    name: "River Wharfe - Pool",
    postcode: "LS21 2JR",
    description:
      "Day Ticket venue. Coarse and Trout Venue. Extends about four miles from River Washburn to bottom limit carpark on the left bank. Day tickets obtainable at fuel station, Pool, and from Angling & Country Sport in Otley. Day Members £7.00 per day. No fishing during published local lighting-up times.",
    image: "/images/rivers/wharfe-pool.jpg",
    species: ["Trout", "Grayling", "Chub", "Barbel", "Dace"],
    facilities: ["Day tickets available", "4 mile stretch", "Match venue"],
  },
  {
    id: "wharfe-ulleskelf",
    name: "River Wharfe - Ulleskelf",
    postcode: "LS24 9DD",
    description:
      "Ulleskelf Bridge up to the Tadcaster Angling Club's notice board on the right bank. Below Ulleskelf Bridge on the right bank, the Railway Field. Four matches allowed each Sunday. Wading other than to position a keepnet is banned. Railway field (Pegs 76 to 100a) - Strictly Members Only.",
    image: "/images/rivers/wharfe-ulleskelf.jpg",
    species: ["Chub", "Barbel", "Roach", "Dace", "Pike"],
    facilities: ["Enclosed car park", "Match venue", "No wading"],
  },
];

export const canals = [
  // Aire and Calder Navigation
  {
    id: "aire-calder-leeds",
    name: "Aire and Calder Canal (Leeds)",
    description:
      "Navigation Tow Path from start down to Lock at Woodlesford. Entries via Goodman Street. Yearbook holders only.",
    image: "/images/canals/aire-calder-leeds.jpg",
    species: ["Carp", "Bream", "Roach", "Perch", "Pike"],
    facilities: ["Towpath access", "Multiple pegs", "Urban fishing"],
  },
  {
    id: "aire-calder-stanley",
    name: "Aire and Calder Canal (Stanley)",
    description:
      "Excellent canal fishing at Stanley with good head of fish and easy access from the towpath.",
    image: "/images/canals/aire-calder-stanley.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Perch"],
    facilities: ["Car parking", "Easy access", "Level towpath"],
  },
  {
    id: "aire-calder-castleford",
    name: "Aire and Calder Canal (Castleford)",
    description:
      "Popular stretch of the Aire and Calder at Castleford with prolific stocks of silver fish and carp.",
    image: "/images/canals/aire-calder-castleford.jpg",
    species: ["Carp", "Bream", "Roach", "Perch", "Pike"],
    facilities: ["Towpath access", "Near town centre"],
  },
  {
    id: "aire-calder-woodlesford",
    name: "Aire and Calder Canal (Woodlesford)",
    description:
      "Stretch of the Aire and Calder at Woodlesford offering consistent fishing throughout the year.",
    image: "/images/canals/aire-calder-woodlesford.jpg",
    species: ["Bream", "Roach", "Perch", "Carp", "Tench"],
    facilities: ["Car parking", "Towpath access"],
  },
  {
    id: "aire-calder-allerton-bywater",
    name: "Aire and Calder Canal (Allerton Bywater)",
    description:
      "A productive stretch near Allerton Bywater with good numbers of bream and roach.",
    image: "/images/canals/aire-calder-allerton.jpg",
    species: ["Bream", "Roach", "Perch", "Pike", "Carp"],
    facilities: ["Roadside parking", "Towpath access"],
  },
  // Leeds Liverpool Canal
  {
    id: "leeds-liverpool-kirkstall",
    name: "Leeds Liverpool Canal - Kirkstall",
    description:
      "Popular stretch at Kirkstall with consistent fishing throughout the year. Easy access from Kirkstall Abbey area.",
    image: "/images/canals/leeds-liverpool-kirkstall.jpg",
    species: ["Roach", "Perch", "Pike", "Bream", "Carp"],
    facilities: ["Towpath access", "Near amenities", "Historic area"],
  },
  {
    id: "leeds-liverpool-rodley",
    name: "Leeds Liverpool Canal - Rodley",
    description:
      "A scenic stretch of the Leeds Liverpool Canal at Rodley with good fishing and wildlife.",
    image: "/images/canals/leeds-liverpool-rodley.jpg",
    species: ["Roach", "Perch", "Pike", "Bream", "Tench"],
    facilities: ["Towpath access", "Pub nearby", "Nature reserve"],
  },
  {
    id: "leeds-liverpool-apperley-bridge",
    name: "Leeds Liverpool Canal - Apperley Bridge",
    description:
      "Pleasant stretch at Apperley Bridge with varied fishing and good stocks of roach and perch.",
    image: "/images/canals/leeds-liverpool-apperley.jpg",
    species: ["Roach", "Perch", "Bream", "Pike", "Carp"],
    facilities: ["Car parking", "Towpath access", "Station nearby"],
  },
  {
    id: "leeds-liverpool-shipley",
    name: "Leeds Liverpool Canal - Shipley",
    description:
      "Historic stretch of canal at Shipley near Saltaire World Heritage Site with good fishing.",
    image: "/images/canals/leeds-liverpool-shipley.jpg",
    species: ["Roach", "Perch", "Pike", "Bream", "Carp"],
    facilities: ["Towpath access", "Heritage area", "Cafes nearby"],
  },
  {
    id: "leeds-liverpool-bingley",
    name: "Leeds Liverpool Canal - Bingley",
    description:
      "Stretch near the famous Five Rise Locks at Bingley offering scenic fishing with excellent stocks.",
    image: "/images/canals/leeds-liverpool-bingley.jpg",
    species: ["Roach", "Perch", "Bream", "Pike", "Tench"],
    facilities: ["Car parking", "Historic locks", "Cafes"],
  },
  {
    id: "leeds-liverpool-granary-wharf",
    name: "Leeds Liverpool Canal - Granary Wharf",
    description:
      "Urban fishing in the heart of Leeds at Granary Wharf. Convenient location with good stocks of fish.",
    image: "/images/canals/leeds-liverpool-granary.jpg",
    species: ["Roach", "Perch", "Bream", "Pike"],
    facilities: ["City centre location", "Cafes nearby", "Easy access"],
  },
  // Other Canals
  {
    id: "selby-canal",
    name: "Selby Canal",
    description:
      "Historic canal connecting Selby to the Aire and Calder Navigation. Good coarse fishing throughout.",
    image: "/images/canals/selby-canal.jpg",
    species: ["Bream", "Roach", "Perch", "Pike", "Tench"],
    facilities: ["Towpath access", "Rural setting"],
  },
  {
    id: "new-junction-canal",
    name: "New Junction Canal",
    description:
      "A straight canal offering excellent fishing with good stocks of bream and roach.",
    image: "/images/canals/new-junction.jpg",
    species: ["Bream", "Roach", "Perch", "Pike", "Carp"],
    facilities: ["Towpath access", "Easy fishing"],
  },
];

export const lakes = [
  // Moor Monkton Complex
  {
    id: "moor-monkton-cyprio",
    name: "Moor Monkton - Cyprio Pool",
    description:
      "Part of the Moor Monkton complex. Pegs 1 to 21. Owned outright by the society. Day tickets available on-site only. Fishing included with Yearbook.",
    image: "/images/lakes/moor-monkton-cyprio.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Rudd"],
    facilities: ["Car parking", "Toilets", "On-site tickets"],
  },
  {
    id: "moor-monkton-match",
    name: "Moor Monkton - Match Pool",
    description:
      "Part of the Moor Monkton complex. Pegs 22 to 53. Popular match venue with excellent stocks. Day tickets available on-site only.",
    image: "/images/lakes/moor-monkton-match.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Perch"],
    facilities: ["Car parking", "Toilets", "Match venue"],
  },
  {
    id: "moor-monkton-front",
    name: "Moor Monkton - Front Pool",
    description:
      "Part of the Moor Monkton complex. Pegs 54 to 72. Well-stocked pool ideal for pleasure fishing. Day tickets on-site.",
    image: "/images/lakes/moor-monkton-front.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Rudd"],
    facilities: ["Car parking", "Toilets", "Easy access"],
  },
  // Ferrybridge Complex
  {
    id: "ferrybridge-lake-1",
    name: "Ferrybridge Lake 1",
    description:
      "Located at the bottom of the Ferrybridge fishery. Yearbook holders only. Good stocks of mixed coarse fish.",
    image: "/images/lakes/ferrybridge-lake-1.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Perch"],
    facilities: ["Car parking", "Easy access"],
  },
  {
    id: "ferrybridge-lake-2",
    name: "Ferrybridge Lake 2",
    description:
      "Located at the bottom of the Ferrybridge fishery. Available for matches. Yearbook holders only.",
    image: "/images/lakes/ferrybridge-lake-2.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Pike"],
    facilities: ["Car parking", "Match venue"],
  },
  // Kippax Park Complex
  {
    id: "kippax-lapwing",
    name: "Kippax Park - Lapwing Lake",
    description:
      "A 27-peg match/pleasure lake. Day tickets on-site only - must be obtained before fishing. £2 concession for Leeds ASA yearbook holders.",
    image: "/images/lakes/kippax-lapwing.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Perch"],
    facilities: ["Car parking", "On-site tickets", "Match venue"],
  },
  {
    id: "kippax-osprey",
    name: "Kippax Park - Osprey Lake",
    description:
      "A 30-peg match/pleasure lake. Day tickets on-site only - must be obtained before fishing. £2 concession for Leeds ASA yearbook holders.",
    image: "/images/lakes/kippax-osprey.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Rudd"],
    facilities: ["Car parking", "On-site tickets", "Match venue"],
  },
  {
    id: "kippax-skylark",
    name: "Kippax Park - Skylark Lake",
    description:
      "An 18-peg lake for pleasure anglers only. Day tickets on-site only. £2 concession for Leeds ASA yearbook holders.",
    image: "/images/lakes/kippax-skylark.jpg",
    species: ["Carp", "Tench", "Roach", "Rudd", "Perch"],
    facilities: ["Car parking", "On-site tickets", "Pleasure only"],
  },
  {
    id: "kippax-rainbow",
    name: "Kippax Park - Rainbow Specialist Carp Lake",
    description:
      "A 3-acre spring-fed specialist carp lake with English-bred commons and mirrors averaging over 20lb. 24-hour day ticket available. Three rods per angler.",
    image: "/images/lakes/kippax-rainbow.jpg",
    species: ["Carp"],
    facilities: ["Car parking", "24-hour fishing", "Specimen lake"],
  },
  {
    id: "kippax-polo-pond",
    name: "Kippax 'Polo' Pond",
    description:
      "Situated down Brigshaw Lane, Kippax. No matches allowed. No carp to be retained in keepnets. Owned outright by the society. Yearbook holders only.",
    image: "/images/lakes/kippax-polo.jpg",
    species: ["Carp", "Tench", "Roach", "Rudd", "Perch"],
    facilities: ["Limited parking", "Quiet venue"],
  },
  // Other Lakes
  {
    id: "knotford-lagoon",
    name: "Knotford Lagoon, Otley",
    description:
      "A large stillwater fishery situated on the right of the road between Pool and Otley. Parking available in official car park at side of lake. Yearbook holders only.",
    image: "/images/lakes/knotford-lagoon.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Pike"],
    facilities: ["Car parking", "Large water", "Scenic views"],
  },
  {
    id: "sandwath-lake",
    name: "Sandwath Lake, Church Fenton",
    description:
      "A 2.5-acre lake off Sandwath Lane near Church Fenton Station. Owned outright by the society. Yearbook holders only.",
    image: "/images/lakes/sandwath-lake.jpg",
    species: ["Carp", "Tench", "Bream", "Roach", "Perch"],
    facilities: ["Car parking", "Peaceful setting"],
  },
];

// Membership pricing
export const membershipPrices = {
  individual: {
    adult: { price: 40, description: "Full membership for ages 18-64" },
    senior: { price: 30, description: "Reduced rate for ages 65+" },
    junior: { price: 15, description: "Young anglers ages 12-17" },
    child: { price: 10, description: "Children ages under 12" },
    disabled: {
      price: 30,
      description: "Discounted rate for registered disabled",
    },
  },
  family: {
    price: 80,
    description: "2 Adults + up to 3 children under 16",
  },
};

// Matches data
export const upcomingMatches = [
  {
    id: 1,
    name: "Winter League Round 5",
    date: "2026-01-12",
    venue: "Aire and Calder Canal (Leeds)",
    time: "10:00",
    type: "League",
  },
  {
    id: 2,
    name: "Open Match",
    date: "2026-01-19",
    venue: "Moor Monkton Pools",
    time: "09:30",
    type: "Open",
  },
  {
    id: 3,
    name: "Club Championship - Heat 1",
    date: "2026-02-02",
    venue: "River Aire - Ferrybridge",
    time: "10:00",
    type: "Championship",
  },
  {
    id: 4,
    name: "Winter League Round 6",
    date: "2026-02-09",
    venue: "Leeds Liverpool Canal - Kirkstall",
    time: "10:00",
    type: "League",
  },
];

export const clubMeetings = [
  {
    id: 1,
    name: "Delegates Meeting",
    date: "2026-01-08",
    time: "19:30",
    venue: "The Anglers Club",
    description: "Monthly delegates meeting to discuss society matters.",
  },
  {
    id: 2,
    name: "AGM",
    date: "2026-03-15",
    time: "19:00",
    venue: "The Anglers Club",
    description: "Annual General Meeting - all members welcome.",
  },
];

// Anglers Club info
export const anglersClub = {
  name: "The Anglers Club",
  address: {
    line1: "Leeds and District Amalgamated Society of Anglers",
    line2: "The Anglers Club",
    line3: "75 Stoney Rock Lane",
    line4: "Beckett Street",
    city: "Leeds",
    postcode: "LS9 7TB",
  },
  openingHours: {
    sunday: "2:00pm - 9:00pm",
    monday: "6:00pm - 11:00pm",
    tuesday: "Closed",
    wednesday: "6:00pm - 11:00pm",
    thursday: "6:00pm - 11:00pm",
    friday: "6:00pm - 11:00pm",
    saturday: "4:00pm - 11:00pm",
  },
  facilities: [
    "Full bar",
    "Big screen TV",
    "Snooker tables",
    "Function room hire",
    "Free parking",
    "Wheelchair access",
  ],
  events: [
    "Weekly prize draws",
    "Match presentations",
    "Social nights",
    "Special events",
  ],
};

// Benefits of membership
export const membershipBenefits = [
  {
    title: "Access to 40+ Waters",
    description:
      "Fish on over 40 diverse waters including rivers, canals, and lakes across Leeds and the surrounding district.",
    icon: "Fish",
  },
  {
    title: "Anglers Club Membership",
    description:
      "Automatic social membership to The Anglers Club with access to bar, events, and facilities.",
    icon: "Users",
  },
  {
    title: "Match Participation",
    description:
      "Enter club matches, leagues, and championships throughout the year.",
    icon: "Trophy",
  },
  {
    title: "Monthly Newsletter",
    description:
      "Stay informed with monthly updates on venues, matches, and society news.",
    icon: "Mail",
  },
  {
    title: "Yearbook",
    description:
      "Comprehensive yearbook with all water details, maps, and rules.",
    icon: "BookOpen",
  },
  {
    title: "Immediate Access",
    description:
      "Start fishing the same day you pay - show your PayPal receipt as proof.",
    icon: "Zap",
  },
];
