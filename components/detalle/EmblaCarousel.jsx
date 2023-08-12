import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Stack } from '@mui/material'


const EmblaCarousel = ({imagenesProp}) => {

  const { imagenes } = imagenesProp

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel('')
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <Stack width='100%' h='100%' direction='column' alignItems='center' justifyContent='center' gap={4}>

      <Stack width={{xs:'90%', sm:'50%'}} overflow='hidden' ref={emblaMainRef}>
        <Stack width='100%' direction='row' ml={-1} style={{ touchAction:'pan-y', backfaceVisibility:'hidden' }}>
          {imagenes?.map( ( item, index) => (
            <Stack key={index+1} flex='0 0 100%'>
              <Image src={item?.url} alt="imagen" width={400} height={400} />
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack width={{xs:'90%', sm:'50%'}} mt='2rem'>
        <Stack width='100%' overflow='hidden' ref={emblaThumbsRef}>
          <Stack width='100%' direction='row' ml={-1}>
            {imagenes?.map( (item,index) => (
              <Stack key={index+2} pl='0.8rem' style={{ opacity: index === selectedIndex ? 1 : 0.5 }}>
                <Stack onClick={() => onThumbClick(index)} className="embla-thumbs__slide__button">
                  <Image src={item?.url} alt="imagen" width='100%' height={100} />
                </Stack>
              </Stack>
            )
            )}
          </Stack>
        </Stack>
      </Stack>

    </Stack>
  )
}

export default EmblaCarousel;