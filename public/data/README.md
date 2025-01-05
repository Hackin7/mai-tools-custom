# Data

## Instructions

Case 1: If a song belongs to a older Japan version but is eventually added to International version, please update only song-info/intl.json. Examples:

- 自傷無色: SPLASH (Jp) < Festival (intl)
- 劣等上等: SPLASH (Jp) < Festival (intl)

Case 2: If a song belongs to a newer Japan version but is added to International version sooner, please update both chart-levels and song-info/intl.json. Examples:

- INTERNET OVERDOSE: FESTiVAL (intl) < FESTiVAL PLUS (Jp)

Case 3: If a song is removed from Japan but still exists in International version, please update chart-levels, song-info/intl.json and src/common/removed-songs.ts. Examples:

- 全世界共通リズム感テスト is removed in Japan, so chart levels are necessary.

Case 4: If you know the internal levels (also referred to as chart constant) of a song, please update chart-levels.

## chart-levels Schema

Each JSON file in this folder represents data specific to the version.

- Chart type: Either "dx" or "standard"
  - Song name
    - Levels: An array of chart levels (BASIC, ADVANCED, EXPERT, MASTER, and Re:MASTER). If you don't know the exact level, please use negative number. For example, if you know a chart is 12.9, use 12.9. If you only know a chart is 12+, use -12.6 (BUDDiES PLUS or newer) or -12.7 (older versions). If you only know a chart is 12, use -12.

## song-info Schema

Each JSON file in this folder represents data specific to the region.

- Chart type: Either "dx" or "standard"
  - Debut version: The version when the song was added. Please refer to [src/common/game-version.ts](https://github.com/myjian/mai-tools/blob/gh-pages/src/common/game-version.ts) for the version numbers.
    - Song names: An array of song names
