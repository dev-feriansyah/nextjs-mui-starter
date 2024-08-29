import { VolumeSlider } from '@/components'
import { Box, Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Box>
        <Typography variant="h1">Next App + Mui</Typography>
        <VolumeSlider />
      </Box>
    </Container>
  )
}
