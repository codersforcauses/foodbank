import React from 'react'
import type { Achievement } from 'lib/types'

export const AchievementContext = React.createContext<Map<string, Achievement>>(
  new Map()
)
