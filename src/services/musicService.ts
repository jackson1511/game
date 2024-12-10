const API_BASE_URL = 'https://api.jamendo.com/v3.0'
const CLIENT_ID = 'd69609fc'
const CACHE_KEY = 'music_list'
const DOWNLOADED_KEY = 'downloaded_songs'

export interface Song {
  id: number
  name: string
  duration: string
  downloadUrl?: string
  audioUrl: string
  isDownloaded: boolean
}

export const musicService = {
  async getMusic(): Promise<Song[]> {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      console.log('Getting music from cache')
      const songs = JSON.parse(cached) as Song[]
      return this.mergeWithDownloadedStatus(songs)
    }

    console.log('Fetching music from API')
    try {
      const response = await fetch(
        `${API_BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=20&include=musicinfo&imagesize=200`,
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      if (!data.results) {
        throw new Error('No results in API response')
      }

      interface JamendoTrack {
        audio: string
        id: number
        name: string
        duration: number
        audiodownload: string
      }

      const songs = data.results.map((track: JamendoTrack) => ({
        id: track.id,
        name: track.name,
        duration: formatDuration(track.duration),
        downloadUrl: track.audiodownload,
        audioUrl: track.audio,
        isDownloaded: false,
      }))

      // Cache the results
      localStorage.setItem(CACHE_KEY, JSON.stringify(songs))

      return this.mergeWithDownloadedStatus(songs)
    } catch (error) {
      console.error('Error fetching music:', error)
      return []
    }
  },

  async refreshMusic(): Promise<Song[]> {
    localStorage.removeItem(CACHE_KEY)
    return this.getMusic()
  },

  markAsDownloaded(songId: number) {
    const downloaded = this.getDownloadedSongs()
    if (!downloaded.includes(songId)) {
      downloaded.push(songId)
      localStorage.setItem(DOWNLOADED_KEY, JSON.stringify(downloaded))
    }
  },

  getDownloadedSongs(): number[] {
    const downloaded = localStorage.getItem(DOWNLOADED_KEY)
    return downloaded ? JSON.parse(downloaded) : []
  },

  mergeWithDownloadedStatus(songs: Song[]): Song[] {
    const downloadedIds = this.getDownloadedSongs()
    return songs.map((song) => ({
      ...song,
      isDownloaded: downloadedIds.includes(song.id),
    }))
  },

  clearCache() {
    localStorage.removeItem(CACHE_KEY)
  },
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  return `${minutes}M`
}
