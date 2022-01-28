import BackgroundImage from './TuckerMap.png'
import AquaOcean from './locations/AquaOcean.png'
import BananaBunches from './locations/BananaBunches.png'
import BushLand from './locations/BushLand.png'
import CluckyCoop from './locations/CluckyCoop.png'
import CoolCloud from './locations/CoolCloud.png'
import DairyPark from './locations/DairyPark.png'
import FruityOrchard from './locations/FruityOrchard.png'
import GrainField from './locations/GrainField.png'
import GrazingLands from './locations/GrazingLands.png'
import HealthyTown from './locations/HealthyTown.png'
import SupplyStore from './locations/SupplyStore.png'
import VegieZone from './locations/VegieZone.png'
import WickedWaterway from './locations/WickedWaterway.png'
import YoghurtMountains from './locations/YoghurtMountains.png'
import ZombieWasteland from './locations/ZombieWasteland.png'

export interface AssetMapProps {
  bg: StaticImageData
  coolCloud: StaticImageData
  fruityOrchard: StaticImageData
  bushLand: StaticImageData
  vegieZone: StaticImageData
  zombieWasteland: StaticImageData
  wickedWaterway: StaticImageData
  supplyStore: StaticImageData
  grazingLands: StaticImageData
  grainField: StaticImageData
  bananaBunches: StaticImageData
  healthyTown: StaticImageData
  dairyPark: StaticImageData
  cluckyCoop: StaticImageData
  yoghurtMountains: StaticImageData
  aquaOcean: StaticImageData
}

const assetMap: AssetMapProps = {
  bg: BackgroundImage,
  coolCloud: CoolCloud,
  fruityOrchard: FruityOrchard,
  bushLand: BushLand,
  vegieZone: VegieZone,
  zombieWasteland: ZombieWasteland,
  wickedWaterway: WickedWaterway,
  supplyStore: SupplyStore,
  grazingLands: GrazingLands,
  grainField: GrainField,
  bananaBunches: BananaBunches,
  healthyTown: HealthyTown,
  dairyPark: DairyPark,
  cluckyCoop: CluckyCoop,
  yoghurtMountains: YoghurtMountains,
  aquaOcean: AquaOcean
}

export default assetMap
