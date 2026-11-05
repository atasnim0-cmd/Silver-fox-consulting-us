import type { StaticImageData } from "next/image";

import austinSkylineDusk from "@/assets/photos/austin-skyline-dusk.jpg";
import austinSkylineDay from "@/assets/photos/austin-skyline-day.jpg";
import dallasSkylineDusk from "@/assets/photos/dallas-skyline-dusk.jpg";
import dallasTowersNight from "@/assets/photos/dallas-towers-night.jpg";
import dallasNightReunion from "@/assets/photos/dallas-night-reunion.jpg";
import houstonSkylineNight from "@/assets/photos/houston-skyline-night.jpg";
import sanAntonioRiverwalk from "@/assets/photos/san-antonio-riverwalk.jpg";
import texasCapitolFlags from "@/assets/photos/texas-capitol-flags.jpg";
import texasCapitolDome from "@/assets/photos/texas-capitol-dome.jpg";
import refineryDusk from "@/assets/photos/refinery-dusk.jpg";
import powerLinesTwilight from "@/assets/photos/power-lines-twilight.jpg";
import jetEngine from "@/assets/photos/jet-engine.jpg";
import hospitalHallway from "@/assets/photos/hospital-hallway.jpg";
import networkCables from "@/assets/photos/network-cables.jpg";
import serverAisle from "@/assets/photos/server-aisle.jpg";
import analystHeadphones from "@/assets/photos/analyst-headphones.jpg";
import analystNightDesk from "@/assets/photos/analyst-night-desk.jpg";
import boardroom from "@/assets/photos/boardroom.jpg";
import engineeringTeam from "@/assets/photos/engineering-team.jpg";

export type Photo = { src: StaticImageData; alt: string };

/**
 * All photography is from Unsplash under the Unsplash License (free for
 * commercial use, attribution not required). Sources are listed in
 * docs/PHOTO_CREDITS.md.
 */
export const photos = {
  austinSkylineDusk: {
    src: austinSkylineDusk,
    alt: "Downtown Austin skyline at dusk above Lady Bird Lake and its bridges",
  },
  austinSkylineDay: {
    src: austinSkylineDay,
    alt: "Aerial view of the Austin skyline and the Congress Avenue Bridge",
  },
  dallasSkylineDusk: {
    src: dallasSkylineDusk,
    alt: "Dallas skyline at dusk with Reunion Tower and the Trinity River",
  },
  dallasTowersNight: {
    src: dallasTowersNight,
    alt: "Office towers in downtown Dallas lit up at night",
  },
  dallasNightReunion: {
    src: dallasNightReunion,
    alt: "Dallas at night with Reunion Tower lit in blue",
  },
  houstonSkylineNight: {
    src: houstonSkylineNight,
    alt: "Downtown Houston at night seen from above the freeway",
  },
  sanAntonioRiverwalk: {
    src: sanAntonioRiverwalk,
    alt: "The San Antonio River Walk at night",
  },
  texasCapitolFlags: {
    src: texasCapitolFlags,
    alt: "The Texas State Capitol dome with the United States and Texas flags",
  },
  texasCapitolDome: {
    src: texasCapitolDome,
    alt: "The Texas State Capitol dome against a blue sky",
  },
  refineryDusk: {
    src: refineryDusk,
    alt: "A Gulf Coast refinery lit at dusk with barges on the water",
  },
  powerLinesTwilight: {
    src: powerLinesTwilight,
    alt: "High-voltage transmission towers against a twilight sky",
  },
  jetEngine: {
    src: jetEngine,
    alt: "A large turbofan jet engine on the flight line",
  },
  hospitalHallway: {
    src: hospitalHallway,
    alt: "A nurse in scrubs moving equipment down a hospital hallway",
  },
  networkCables: {
    src: networkCables,
    alt: "Fiber and copper cabling in data center racks",
  },
  serverAisle: {
    src: serverAisle,
    alt: "An aisle of equipment racks in a data center",
  },
  analystHeadphones: {
    src: analystHeadphones,
    alt: "A security engineer with headphones working across several screens",
  },
  analystNightDesk: {
    src: analystNightDesk,
    alt: "An analyst working late at a desk with two monitors",
  },
  boardroom: {
    src: boardroom,
    alt: "Team meeting around a long conference table",
  },
  engineeringTeam: {
    src: engineeringTeam,
    alt: "Engineers working together on laptops at a shared table",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
