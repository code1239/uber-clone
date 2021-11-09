import {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

    const router = useRouter()
    const {pickup, dropoff} = router.query

    const getPickupCoordinates = (pickup) => {
        //'pk.eyJ1IjoiY29kZTEyMzkiLCJhIjoiY2t2cjBhbmJsMm9rMDJ1dGsxNm53dmt2aSJ9.2d6ja2GjN9ZidUUkcPPj9A'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiY29kZTEyMzkiLCJhIjoiY2t2cjBhbmJsMm9rMDJ1dGsxNm53dmt2aSJ9.2d6ja2GjN9ZidUUkcPPj9A', 
                limit: 1
            })
        )
        .then(res => res.json())
        .then(data => setPickupCoordinates(data.features[0].center))
    }

    const getDropoffCoordinates = (dropoff) => {
        //'pk.eyJ1IjoiY29kZTEyMzkiLCJhIjoiY2t2cjBhbmJsMm9rMDJ1dGsxNm53dmt2aSJ9.2d6ja2GjN9ZidUUkcPPj9A'
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiY29kZTEyMzkiLCJhIjoiY2t2cjBhbmJsMm9rMDJ1dGsxNm53dmt2aSJ9.2d6ja2GjN9ZidUUkcPPj9A',  
                limit: 1
            })
        )
        .then(res => res.json())
        .then(data => setDropoffCoordinates(data.features[0].center))
    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
    }, [pickup, dropoff])
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="search" passHref={true}>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map pickupCoordinates={pickupCoordinates} 
                 dropoffCoordinates={dropoffCoordinates}/>
            <RideContainer> 
                <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}/>
                <ConfirmButtonContainer> 
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex flex-col flex-1 h-1/2
`

const ConfirmButtonContainer = tw.div`
   border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white text-center mx-4 my-4 py-4 text-xl cursor-pointer
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain
`