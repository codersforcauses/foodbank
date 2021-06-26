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
  bg: string
  coolCloud: string
  fruityOrchard: string
  bushLand: string
  vegieZone: string
  zombieWasteland: string
  wickedWaterway: string
  supplyStore: string
  grazingLands: string
  grainField: string
  bananaBunches: string
  healthyTown: string
  dairyPark: string
  cluckyCoop: string
  yoghurtMountains: string
  aquaOcean: string
}

// needed for keyof functionality else Jeremiah's linter throws errors
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
