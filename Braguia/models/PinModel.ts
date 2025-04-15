import RelPin from './RelPin';
import Media from './Media';

class PinModel {
    id: number
    rel_pin: RelPin[]
    media: Media[]
    pin_name: string
    pin_desc: string
    pin_lat: number
    pin_lng: number
    pin_alt: number
}

export default PinModel
