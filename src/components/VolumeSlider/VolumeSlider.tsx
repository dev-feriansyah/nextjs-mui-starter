'use client'

import { Slider, Stack } from '@mui/material'
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import { useState } from 'react'

export const VolumeSlider = () => {
  const [value, setValue] = useState<number>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  return (
    <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
      <VolumeDown />
      <Slider aria-label="Volume" value={value} onChange={handleChange} />
      <VolumeUp />
    </Stack>
  )
}
