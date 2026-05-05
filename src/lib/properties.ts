import { PropertyInfo } from "./property-types";

const properties: PropertyInfo[] = [
  {
    slug: "armadale",
    name: "Armadale Residence",
    subtitle: "ARMADALE - PERTH WA",
    address: "5 Winchester Road, Armadale",
    sdaCategory: "High Physical Support",
    sdaSuitability: ["High Physical Support", "Fully Accessible", "Improved Liveability"],
    propertyType: "house",
    bedroomDescription: "3 Accessible Bedrooms",
    bathroomDescription: "3 Ensuite Bathrooms + Powder Room",
    parkingDescription: "2 Parking Bays",
    availability: "Available",
    status: "available",
    heroImage: "/images/Armadale.png",
    cardImage: "/images/Armadale.png",
    keyStats: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3 + Powder Room" },
      { label: "Parking", value: "2 Bays" },
      { label: "SDA Type", value: "High Physical Support" },
    ],
    locationPoints: [
      "Only 300m from Sherwood Train Station, offering quick and easy access to public transport.",
      "500m to Kingsley Primary School and several other local schools.",
      "Close to multiple supermarkets, including IGA Local Grocer on Seventh Road, Coles at Armadale Shopping City, and ALDI on Jull Street.",
      "Armadale Shopping City is just a few minutes away, providing supermarkets, pharmacies, retail stores, cafes, and essential services.",
      "Near Armadale Health Service, offering convenient access to hospital and allied health services.",
      "Surrounded by parks and open spaces, including Creyk Park and Matron Olive Galliers Park.",
      "Easy access to major roads, including Armadale Road and Albany Highway for smooth travel across Perth.",
      "Quiet residential street, ideal for support worker access, transport providers, and visitors.",
      "Strong local NDIS presence, with a range of therapy services and support organisations operating in the area.",
    ],
    features: [
      {
        title: "NDIS-Approved for 3 Residents",
        description:
          "This property is tailored for NDIS participants with two or three resident SDA funding, offering accessibility and high physical support features that meet NDIS standards.",
      },
      {
        title: "Onsite Overnight Assistance (OOA) Room",
        description:
          "The home includes a dedicated OOA room, allowing 24/7 care for residents, ensuring that support is always close at hand.",
      },
      {
        title: "Fire Sprinklers Throughout",
        description:
          "The home is fully fitted with fire sprinklers throughout, providing an added layer of safety and peace of mind for all residents.",
      },
      {
        title: "Private Ensuite Bedrooms",
        description:
          "Each of the three bedrooms includes its own large private ensuite, giving every resident comfort, privacy, and plenty of space for daily care.",
      },
      {
        title: "Spacious Built-in Robes",
        description:
          "All three bedrooms come with built-in robes and ample space, allowing for comfort and customisation, especially for those requiring additional accessibility support.",
      },
      {
        title: "Outdoor Alfresco Area",
        description:
          "Enjoy the private outdoor alfresco area, perfect for relaxing or entertaining, with seamless indoor-outdoor flow and a low-maintenance garden.",
      },
    ],
    gallery: [
      { src: "/images/properties/armadale/hero.jpg", alt: "Armadale residence exterior" },
      { src: "/images/properties/armadale/floorplan.jpg", alt: "Armadale residence interior" },
    ],
    floorplans: [
      {
        src: "/images/properties/armadale/floorplan.jpg",
        alt: "Armadale Residence floorplan - 3 participant house",
      },
    ],
    specifications: [
      {
        title: "Entrance, Doorways and Door Hardware",
        icon: "door",
        items: [
          "A level landing of 1500mm x 1500mm with a maximum gradient and crossfall provided at the level (step-free) external doorway.",
          "The level landing area shall be increased to accommodate door circulation spaces.",
          "All external doorways must have a minimum clear opening width of 950mm.",
          "Door handles installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "Corridors, Flooring and Windows",
        icon: "corridor",
        items: [
          "All internal corridors and passageways provide a minimum clear width of 1200mm.",
          "Internal floor finishes have a minimum slip resistance rating of R10.",
          "Windows with handles installed no higher than 1000mm above finished floor level.",
        ],
      },
      {
        title: "Bedroom and Living Room",
        icon: "bedroom",
        items: [
          "The dwelling's bedroom size allows for a Queen bed size of 1530mm x 2100mm. There is 1540mm on any one side of the bed, the other two sides have a minimum of 1000mm.",
          "The family/living room has a minimum free space of 2250mm in diameter, clear of furniture.",
        ],
      },
      {
        title: "Switches and GPOs",
        icon: "lightbulb",
        items: [
          "Light switches at 1000mm above the finished floor level and horizontally aligned with the door handle at the entrance to the room.",
          "Dimmable lighting switches in living areas and bedrooms.",
          "GPOs and light switches are rocker action in design with a minimum width of 35mm.",
          "GPOs are installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "General Inclusions",
        icon: "home",
        items: [
          "3 bedrooms",
          "3 ensuite bathrooms + powder room",
          "One living area",
          "One kitchen",
          "One laundry",
          "Intercom camera with mobile app",
          "Ceiling hoist provision in bedroom",
        ],
      },
      {
        title: "Accessibility from Boundary & Car Park",
        icon: "accessibility",
        items: [
          "A safe, continuous step-free accessway from the front boundary of the site to an entry doorway of the dwelling.",
          "A safe, continuous step-free accessway from car parking associated with the dwelling to an entry doorway of the dwelling.",
        ],
      },
      {
        title: "Heating and Cooling",
        icon: "cooling",
        items: ["Split system ACs in all bedrooms and living area."],
      },
      {
        title: "Ceiling Hoists",
        icon: "hoist",
        items: [
          "Where required by the participant, bedrooms shall have a provision for power and inbuilt structure, capable of installation of a constant charge ceiling hoist.",
          "The hoist shall be capable of going across the bed and down the bed. Min load capacity of the hoist shall be 250kg.",
        ],
      },
      {
        title: "Storage",
        icon: "storage",
        items: [
          "A dwelling must be provided with a storage cupboard with a minimum 600mm width and adjustable shelf heights.",
          "The storage cupboard is required to be separate to the participant's bedroom robe.",
        ],
      },
      {
        title: "Assistive Technology",
        icon: "tech",
        items: [
          "Internet connection with the ability for high internet speeds to be maintained and stable in nature with wi-fi coverage throughout all areas of the dwelling.",
          "Intercom system to enable communication between the participant and their supports when not within line of sight.",
        ],
      },
      {
        title: "Emergency Power Solutions",
        icon: "power",
        items: [
          "Emergency power solutions to cater for a minimum 2-hour outage in no less than 2 double GPOs in participant bedrooms and any provided automated doors that are used for entry or exit.",
        ],
      },
    ],
    metaTitle: "NDIS-Approved High Physical Support Home in Armadale, WA | Innogreen",
    metaDescription:
      "Newly built NDIS high physical support home in Armadale for rent. Designed for accessibility with 3 bedrooms, modern amenities, and assistive technology options.",
    ogImage: "/images/Armadale.png",
  },
  {
    slug: "baldivis",
    name: "Butterleaf Retreat",
    subtitle: "BALDIVIS - PERTH WA",
    address: "48 Butterleaf Road, Baldivis",
    sdaCategory: "High Physical Support",
    sdaSuitability: ["High Physical Support", "Fully Accessible", "Improved Liveability"],
    propertyType: "house",
    bedroomDescription: "3 Accessible Bedrooms",
    bathroomDescription: "3 Ensuite Bathrooms + Powder Room",
    parkingDescription: "2 Parking Bays",
    availability: "Available",
    status: "available",
    heroImage: "/images/Baldivis.png",
    cardImage: "/images/Baldivis.png",
    keyStats: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3 + Powder Room" },
      { label: "Parking", value: "2 Bays" },
      { label: "SDA Type", value: "High Physical Support" },
    ],
    locationPoints: [
      "Conveniently Located Near Baldivis Shopping Centre: Just minutes away, offering a variety of shopping, dining, and entertainment options.",
      "Close to Public Transport: Easy access to local bus routes and nearby train stations for hassle-free commuting.",
      "Nearby Schools and Parks: Within close proximity to local schools and green spaces, perfect for families and outdoor enthusiasts.",
      "Quiet Residential Neighbourhood: Situated in a peaceful area, ideal for relaxation and a quiet lifestyle.",
    ],
    features: [
      {
        title: "NDIS-Approved for 2-3 Residents",
        description:
          "This property is tailored for NDIS participants with two or three resident SDA funding, offering accessibility and high physical support features that meet NDIS standards.",
      },
      {
        title: "Onsite Overnight Assistance (OOA) Room",
        description:
          "The home includes a dedicated OOA room, allowing 24/7 care for residents, ensuring that support is always close at hand.",
      },
      {
        title: "Furnished Living Spaces",
        description:
          "Move right in with a fully furnished lounge, kitchen, and essential white goods provided, ensuring comfort and convenience from day one.",
      },
      {
        title: "Modern, Accessible Design",
        description:
          "Designed with accessibility in mind, this home features open-plan living spaces, step-free access, and wide doorways to ensure ease of movement for all residents.",
      },
      {
        title: "Spacious Bedrooms with Ensuites",
        description:
          "All three bedrooms come with private ensuite bathrooms, built-in robes and ample space, allowing for comfort and customisation, especially for those requiring additional accessibility support.",
      },
      {
        title: "Outdoor Alfresco Area",
        description:
          "Enjoy the private outdoor alfresco area, perfect for relaxing or entertaining, with seamless indoor-outdoor flow and a low-maintenance garden.",
      },
    ],
    gallery: [
      { src: "/images/properties/baldivis/gallery/01-exterior.jpg", alt: "Baldivis property exterior" },
      { src: "/images/properties/baldivis/gallery/02-exterior-front.jpg", alt: "Baldivis property front entrance" },
      { src: "/images/properties/baldivis/gallery/03-living.jpg", alt: "Baldivis open-plan living area" },
      { src: "/images/properties/baldivis/gallery/04-kitchen.jpg", alt: "Baldivis modern kitchen" },
      { src: "/images/properties/baldivis/gallery/05-bedroom1.jpg", alt: "Baldivis furnished bedroom" },
      { src: "/images/properties/baldivis/gallery/07-bedroom2.jpg", alt: "Baldivis second bedroom" },
      { src: "/images/properties/baldivis/gallery/09-backyard.jpg", alt: "Baldivis backyard and alfresco area" },
    ],
    floorplans: [
      {
        src: "/images/properties/baldivis/floorplan.jpg",
        alt: "Baldivis property floorplan - 3 participant house",
      },
    ],
    specifications: [
      {
        title: "Entrance, Doorways and Door Hardware",
        icon: "door",
        items: [
          "A level landing of 1500mm x 1500mm with a maximum gradient and crossfall provided at the level (step-free) external doorway.",
          "The level landing area shall be increased to accommodate door circulation spaces.",
          "All external doorways must have a minimum clear opening width of 950mm.",
          "Door handles installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "Corridors, Flooring and Windows",
        icon: "corridor",
        items: [
          "All internal corridors and passageways provide a minimum clear width of 1200mm.",
          "Internal floor finishes have a minimum slip resistance rating of R10.",
          "Windows with handles installed no higher than 1000mm above finished floor level.",
        ],
      },
      {
        title: "Bedroom and Living Room",
        icon: "bedroom",
        items: [
          "The dwelling's bedroom size allows for a Queen bed size of 1530mm x 2100mm. There is 1540mm on any one side of the bed, the other two sides have a minimum of 1000mm.",
          "The family/living room has a minimum free space of 2250mm in diameter, clear of furniture.",
        ],
      },
      {
        title: "Switches and GPOs",
        icon: "lightbulb",
        items: [
          "Light switches at 1000mm above the finished floor level and horizontally aligned with the door handle at the entrance to the room.",
          "Dimmable lighting switches in living areas and bedrooms.",
          "GPOs and light switches are rocker action in design with a minimum width of 35mm.",
          "GPOs are installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "General Inclusions",
        icon: "home",
        items: [
          "3 bedrooms",
          "3 ensuite bathrooms + powder room",
          "One living area",
          "One kitchen",
          "One laundry",
          "Intercom camera with mobile app",
          "Ceiling hoist provision in bedroom",
        ],
      },
      {
        title: "Accessibility from Boundary & Car Park",
        icon: "accessibility",
        items: [
          "A safe, continuous step-free accessway from the front boundary of the site to an entry doorway of the dwelling.",
          "A safe, continuous step-free accessway from car parking associated with the dwelling to an entry doorway of the dwelling.",
        ],
      },
      {
        title: "Heating and Cooling",
        icon: "cooling",
        items: ["Split system ACs in all bedrooms and living area."],
      },
      {
        title: "Ceiling Hoists",
        icon: "hoist",
        items: [
          "Where required by the participant, bedrooms shall have a provision for power and inbuilt structure, capable of installation of a constant charge ceiling hoist.",
          "The hoist shall be capable of going across the bed and down the bed. Min load capacity of the hoist shall be 250kg.",
        ],
      },
      {
        title: "Storage",
        icon: "storage",
        items: [
          "A dwelling must be provided with a storage cupboard with a minimum 600mm width and adjustable shelf heights.",
          "The storage cupboard is required to be separate to the participant's bedroom robe.",
        ],
      },
      {
        title: "Assistive Technology",
        icon: "tech",
        items: [
          "Internet connection with the ability for high internet speeds to be maintained and stable in nature with wi-fi coverage throughout all areas of the dwelling.",
          "Intercom system to enable communication between the participant and their supports when not within line of sight.",
        ],
      },
      {
        title: "Emergency Power Solutions",
        icon: "power",
        items: [
          "Emergency power solutions to cater for a minimum 2-hour outage in no less than 2 double GPOs in participant bedrooms and any provided automated doors that are used for entry or exit.",
        ],
      },
    ],
    metaTitle: "NDIS-Approved High Physical Support Home in Baldivis, WA | Innogreen",
    metaDescription:
      "Newly built NDIS high physical support home in Baldivis for rent. Designed for accessibility with 3 bedrooms, modern amenities, and assistive technology options.",
    ogImage: "/images/Baldivis.png",
  },
  {
    slug: "leederville",
    name: "The Milano Leederville",
    subtitle: "LEEDERVILLE - PERTH WA",
    address: "212 Carr Place, Leederville",
    sdaCategory: "High Physical Support",
    sdaSuitability: ["High Physical Support", "Fully Accessible", "Improved Liveability"],
    propertyType: "apartments",
    bedroomDescription: "1 Accessible Bedroom",
    bathroomDescription: "1 Accessible Bathroom",
    parkingDescription: "1 Parking Bay",
    availability: "Available",
    status: "available",
    heroImage: "/images/Leederville.png",
    cardImage: "/images/Leederville.png",
    keyStats: [
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Parking", value: "1 Bay" },
      { label: "SDA Type", value: "Single Occupancy HPS" },
    ],
    locationPoints: [
      "200m to the heart of Leederville.",
      "400m to Leederville Train Station.",
      "10 minute drive to Innaloo Shopping Centre.",
      "10 minute drive to the Perth CBD.",
    ],
    features: [
      {
        title: "Single Occupancy Accessible Living",
        description:
          "Purpose-built for single occupancy with high physical support, fully accessible, and improved liveability design categories.",
      },
      {
        title: "Shared Onsite Supports",
        description:
          "All single occupancy apartments include a concierge service available overnight for any ad hoc supports you may need.",
      },
      {
        title: "Ducted AC with Zone Control",
        description:
          "Ducted air-conditioning with zone controls in living room and participant bedroom for personalised comfort.",
      },
      {
        title: "Ceiling Hoist Provision",
        description:
          "Bedrooms have provision for power and inbuilt structure capable of installation of a constant charge ceiling hoist with 250kg load capacity.",
      },
      {
        title: "3D Virtual Tour Available",
        description:
          "Take a full 360 walk-through of a completed display apartment. Furnishing supplied is optional and can be configured for each resident's needs.",
      },
      {
        title: "Modern, Accessible Design",
        description:
          "Designed with accessibility in mind, featuring open-plan living spaces, step-free access, wide doorways, and accessible bathroom facilities.",
      },
    ],
    gallery: [
      { src: "/images/properties/leederville/hero.jpg", alt: "The Milano Leederville exterior" },
    ],
    floorplans: [
      {
        src: "/images/properties/leederville/floorplan.jpg",
        alt: "Leederville apartment floorplan - single resident",
      },
    ],
    virtualTourUrl: "https://my.matterport.com/show/?m=example",
    brochureUrl: "#",
    sharedSupportsBrochureUrl: "#",
    specifications: [
      {
        title: "Entrance, Doorways and Door Hardware",
        icon: "door",
        items: [
          "A level landing of 1500mm x 1500mm with a maximum gradient and crossfall provided at the level (step-free) external doorway.",
          "The level landing area shall be increased to accommodate door circulation spaces.",
          "All external doorways must have a minimum clear opening width of 950mm.",
          "Door handles installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "Corridors, Flooring and Windows",
        icon: "corridor",
        items: [
          "All internal corridors and passageways provide a minimum clear width of 1200mm.",
          "Internal floor finishes have a minimum slip resistance rating of R10.",
          "Windows with handles installed no higher than 1000mm above finished floor level.",
        ],
      },
      {
        title: "Bedroom and Living Room",
        icon: "bedroom",
        items: [
          "The dwelling's bedroom size allows for a Queen bed size of 1530mm x 2100mm. There is 1540mm on any one side of the bed, the other two sides have a minimum of 1000mm.",
          "The family/living room has a minimum free space of 2250mm in diameter, clear of furniture.",
        ],
      },
      {
        title: "Switches and GPOs",
        icon: "lightbulb",
        items: [
          "Light switches at 1000mm above the finished floor level and horizontally aligned with the door handle at the entrance to the room.",
          "Dimmable lighting switches in living areas and bedrooms.",
          "GPOs and light switches are rocker action in design with a minimum width of 35mm.",
          "GPOs are installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "General Inclusions",
        icon: "home",
        items: [
          "One bedroom",
          "One bathroom",
          "One living area",
          "One kitchen",
          "One laundry",
          "Ducted AC with zone control in living room and participant bedroom",
          "Ceiling hoist provision in bedroom",
        ],
      },
      {
        title: "Accessibility from Boundary & Car Park",
        icon: "accessibility",
        items: [
          "A safe, continuous step-free accessway from the front boundary of the site to an entry doorway of the dwelling.",
          "A safe, continuous step-free accessway from car parking associated with the dwelling to an entry doorway of the dwelling.",
        ],
      },
      {
        title: "Heating and Cooling",
        icon: "cooling",
        items: [
          "Ducted air-conditioning shall be provided to living areas and bedrooms with control panels in an accessible location at 1000mm from FFL and not closer than 500mm to any internal corner.",
        ],
      },
      {
        title: "Ceiling Hoists",
        icon: "hoist",
        items: [
          "Where required by the participant, bedrooms shall have a provision for power and inbuilt structure, capable of installation of a constant charge ceiling hoist.",
          "The hoist shall be capable of going across the bed and down the bed. Min load capacity of the hoist shall be 250kg.",
        ],
      },
      {
        title: "Storage",
        icon: "storage",
        items: [
          "A dwelling must be provided with a storage cupboard with a minimum 600mm width and adjustable shelf heights.",
          "The storage cupboard is required to be separate to the participant's bedroom robe.",
        ],
      },
      {
        title: "Assistive Technology",
        icon: "tech",
        items: [
          "Internet connection with the ability for high internet speeds to be maintained and stable in nature with wi-fi coverage throughout all areas of the dwelling.",
          "Intercom system to enable communication between the participant and their supports when not within line of sight.",
        ],
      },
      {
        title: "Emergency Power Solutions",
        icon: "power",
        items: [
          "Emergency power solutions to cater for a minimum 2-hour outage in no less than 2 double GPOs in participant bedrooms and any provided automated doors that are used for entry or exit.",
        ],
      },
    ],
    metaTitle: "Leederville SDA Apartment for Rent - High Physical Support | Innogreen",
    metaDescription:
      "Discover fully accessible SDA apartments in Leederville, WA. Perfect for NDIS participants, offering smart home technology, accessible features, and overnight onsite support.",
    ogImage: "/images/Leederville.png",
  },
  {
    slug: "morley",
    name: "Mangini Apartments Morley",
    subtitle: "MORLEY - PERTH WA",
    address: "1 Mangini Street, Morley",
    sdaCategory: "High Physical Support",
    sdaSuitability: ["High Physical Support", "Fully Accessible", "Improved Liveability"],
    propertyType: "apartments",
    apartmentCount: 8,
    bedroomDescription: "2 Accessible Bedrooms",
    bathroomDescription: "1 Accessible Bathroom",
    parkingDescription: "1 Parking Bay",
    availability: "Available: May 2025",
    status: "available",
    heroImage: "/images/Morley.png",
    cardImage: "/images/Morley.png",
    keyStats: [
      { label: "Apartments", value: "8" },
      { label: "Bedrooms", value: "2 per apartment" },
      { label: "Parking", value: "1 Bay each" },
      { label: "SDA Type", value: "High Physical Support" },
    ],
    locationPoints: [
      "10-minute walk to Morley Galleria Shopping Centre.",
      "Across the road from Pat O'Hara Reserve, a park and oval.",
      "2-minute walk to Morley Sport & Recreation Centre.",
      "8-minute walk to Coventry Village markets.",
      "1.4 km to Galleria Bus Station.",
    ],
    features: [
      {
        title: "8 Brand-New SDA Apartments",
        description:
          "Designed for single or twin occupancy. 6 apartments feature two SDA bedrooms, 2 apartments include one SDA bedroom and one non-SDA bedroom. Plus 1 Onsite Overnight Assistance (OOA) apartment.",
      },
      {
        title: "Onsite Overnight Assistance (OOA)",
        description:
          "The apartment complex includes a dedicated OOA apartment located on the ground floor, allowing up to 24/7 care for residents, ensuring that support is always close at hand.",
      },
      {
        title: "Fully Furnished",
        description:
          "Move right in with a fully furnished bedroom, lounge, kitchen, and essential white goods provided, ensuring comfort and convenience from day one.",
      },
      {
        title: "Smart Home Inclusions",
        description:
          "Smart blinds, ducted AC, automatic front doors, keyless entry with keypad and mobile app, CCTV and video intercom.",
      },
      {
        title: "Free Unlimited Wi-Fi",
        description:
          "Stay connected with free, unlimited high-speed Wi-Fi, perfect for streaming, staying in touch with loved ones, and everyday browsing.",
      },
      {
        title: "Sustainable Energy Savings",
        description:
          "Our solar panel embedded network provides residents with eco-friendly energy and a 5% discount on Synergy tariffs, reducing both costs and environmental impact.",
      },
      {
        title: "Spacious Bedrooms",
        description:
          "All SDA bedrooms come with built-in robes and ample space, allowing for comfort and customisation, especially for those requiring additional accessibility support.",
      },
      {
        title: "Laundry Facilities",
        description:
          "Each apartment is equipped with a convenient washer/dryer combo, while additional communal washing machine and dryer facilities are available on the ground floor for shared use.",
      },
    ],
    gallery: [
      { src: "/images/properties/morley/gallery/01-exterior.jpg", alt: "Morley apartments exterior" },
      { src: "/images/properties/morley/gallery/02-front.jpg", alt: "Morley apartments front view" },
      { src: "/images/properties/morley/gallery/03-lobby.jpg", alt: "Morley building lobby" },
      { src: "/images/properties/morley/gallery/04-living.jpg", alt: "Morley apartment living area" },
      { src: "/images/properties/morley/gallery/06-bedroom1.jpg", alt: "Morley apartment bedroom" },
      { src: "/images/properties/morley/gallery/07-bathroom1.jpg", alt: "Morley apartment bathroom" },
      { src: "/images/properties/morley/gallery/08-bedroom2.jpg", alt: "Morley apartment second bedroom" },
      { src: "/images/properties/morley/gallery/09-bathroom2.jpg", alt: "Morley apartment second bathroom" },
      { src: "/images/properties/morley/gallery/10-balcony.jpg", alt: "Morley apartment balcony" },
    ],
    floorplans: [
      {
        src: "/images/properties/morley/floorplan-unit1.jpg",
        alt: "Morley Unit 1 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit2.jpg",
        alt: "Morley Unit 2 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit3.jpg",
        alt: "Morley Unit 3 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit4.jpg",
        alt: "Morley Unit 4 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit5.jpg",
        alt: "Morley Unit 5 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit6.jpg",
        alt: "Morley Unit 6 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit7.jpg",
        alt: "Morley Unit 7 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit8.jpg",
        alt: "Morley Unit 8 floorplan",
      },
      {
        src: "/images/properties/morley/floorplan-unit9.jpg",
        alt: "Morley OOA Unit 9 floorplan",
      },
    ],
    houseManualUrl: "#",
    specifications: [
      {
        title: "Entrance, Doorways and Door Hardware",
        icon: "door",
        items: [
          "A level landing of 1500mm x 1500mm with a maximum gradient and crossfall provided at the level (step-free) external doorway.",
          "The level landing area shall be increased to accommodate door circulation spaces.",
          "All external doorways must have a minimum clear opening width of 950mm.",
          "Door handles installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "Corridors, Flooring and Windows",
        icon: "corridor",
        items: [
          "All internal corridors and passageways provide a minimum clear width of 1200mm.",
          "Internal floor finishes have a minimum slip resistance rating of R10.",
          "Windows with handles installed no higher than 1000mm above finished floor level.",
        ],
      },
      {
        title: "Bedroom and Living Room",
        icon: "bedroom",
        items: [
          "The dwelling's bedroom size allows for a Queen bed size of 1530mm x 2100mm. There is 1540mm on any one side of the bed, the other two sides have a minimum of 1000mm.",
          "The family/living room has a minimum free space of 2250mm in diameter, clear of furniture.",
        ],
      },
      {
        title: "Switches and GPOs",
        icon: "lightbulb",
        items: [
          "Light switches at 1000mm above the finished floor level and horizontally aligned with the door handle at the entrance to the room.",
          "Dimmable lighting switches in living areas and bedrooms.",
          "GPOs and light switches are rocker action in design with a minimum width of 35mm.",
          "GPOs are installed at 1000mm above finished floor level.",
        ],
      },
      {
        title: "General Inclusions",
        icon: "home",
        items: [
          "Accessible bedrooms",
          "Ensuite bathroom + powder room",
          "One living area",
          "One kitchen",
          "One laundry",
          "Intercom camera with mobile app",
          "Ceiling hoist provision in bedroom",
        ],
      },
      {
        title: "Accessibility from Boundary & Car Park",
        icon: "accessibility",
        items: [
          "A safe, continuous step-free accessway from the front boundary of the site to an entry doorway of the dwelling.",
          "A safe, continuous step-free accessway from car parking associated with the dwelling to an entry doorway of the dwelling.",
        ],
      },
      {
        title: "Heating and Cooling",
        icon: "cooling",
        items: ["Ducted AC with zone controls in all bedrooms and living area."],
      },
      {
        title: "Ceiling Hoists",
        icon: "hoist",
        items: [
          "Where required by the participant, bedrooms shall have a provision for power and inbuilt structure, capable of installation of a constant charge ceiling hoist.",
          "The hoist shall be capable of going across the bed and down the bed. Min load capacity of the hoist shall be 250kg.",
        ],
      },
      {
        title: "Storage",
        icon: "storage",
        items: [
          "A dwelling must be provided with a storage cupboard with a minimum 600mm width and adjustable shelf heights.",
          "The storage cupboard is required to be separate to the participant's bedroom robe.",
        ],
      },
      {
        title: "Assistive Technology",
        icon: "tech",
        items: [
          "Internet connection with the ability for high internet speeds to be maintained and stable in nature with wi-fi coverage throughout all areas of the dwelling.",
          "Intercom system to enable communication between the participant and their supports when not within line of sight.",
        ],
      },
      {
        title: "Emergency Power Solutions",
        icon: "power",
        items: [
          "Emergency power solutions to cater for a minimum 2-hour outage in no less than 2 double GPOs in participant bedrooms and any provided automated doors that are used for entry or exit.",
        ],
      },
    ],
    metaTitle: "Brand-New SDA Apartments in Morley - Modern & Accessible | Innogreen",
    metaDescription:
      "Discover 1 Mangini Street, Morley — premium SDA apartments. Purpose-built for NDIS participants with smart home automation, secure parking, onsite support, and a prime location near Morley Galleria.",
    ogImage: "/images/Morley.png",
  },
];

export function getAllProperties(): PropertyInfo[] {
  return properties;
}

export function getPropertyBySlug(slug: string): PropertyInfo | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
