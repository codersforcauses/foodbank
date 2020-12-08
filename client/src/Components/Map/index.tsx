import React from "react";
import image from "./tuckermap.jpeg";
import "./index.css";
import {Location} from "../../lib/types"

// FIX THIS JEREMIAH
/*eslint no-unused-vars:*/
interface Props {
    selected: Location | null;
    onSelect: (c: Location | null) => void;
}

export const Map = ({ selected, onSelect }: Props) => {

    const getClassname = (area: Location) => {
        if (area === selected) {
            return 'map-selected';
        } else {
            return 'map-unselected';
        }
    }

    const onMapClick = (area: Location) => {
        console.log(area);
        if (selected === area) {
            onSelect(null);
        } else {
            onSelect(area);
        }
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 490.56">
                <g id="bg"><image width="7151" height="3508" transform="scale(0.14)" xlinkHref={image} /></g>
                <g id="fruityOrchard" className={getClassname('fruityOrchard')} onClick={() => onMapClick('fruityOrchard')}><rect x="123" y="130" width="172" height="107"  /></g>
                <g id="bushLand" className={getClassname('bushLand')} onClick={() => onMapClick('bushLand')}><rect x="28" y="188" width="85" height="85"  /></g>
                <g id="vegieZone" className={getClassname('vegieZone')} onClick={() => onMapClick('vegieZone')}><rect x="8" y="300" width="127" height="83"  /></g>
                <g id="zombieWasteland" className={getClassname('zombieWasteland')} onClick={() => onMapClick('zombieWasteland')}><rect x="92" y="405" width="151" height="69"  /></g>
                <g id="wickedWaterway" className={getClassname('wickedWaterway')} onClick={() => onMapClick('wickedWaterway')}><rect x="370" y="234" width="117" height="53" /></g>
                <g id="supplyStore" className={getClassname('supplyStore')} onClick={() => onMapClick('supplyStore')}><rect x="532" y="183" width="142" height="78"  /></g>
                <g id="grazingLands" className={getClassname('grazingLands')} onClick={() => onMapClick('grazingLands')}><rect x="209" y="270" width="91" height="60"  /></g>
                <g id="grainField" className={getClassname('grainField')} onClick={() => onMapClick('grainField')}><rect x="500" y="284" width="134" height="99"  /></g>
                <g id="bananaBunches" className={getClassname('bananaBunches')} onClick={() => onMapClick('bananaBunches')}><rect x="105.5" y="50.5" width="121" height="96"  /></g>
                <g id="healthyTown" className={getClassname('healthyTown')} onClick={() => onMapClick('healthyTown')}><rect x="243" y="30" width="138" height="109" /></g>
                <g id="dairyPark" className={getClassname('dairyPark')} onClick={() => onMapClick('dairyPark')}><rect x="381" y="51" width="176" height="85" /></g>
                <g id="cluckyCoop" className={getClassname('cluckyCoop')} onClick={() => onMapClick('cluckyCoop')}><rect x="493" y="124" width="100" height="69"  /></g>
                <g id="coolCloud" className={getClassname('coolCloud')} onClick={() => onMapClick('coolCloud')}><rect x="493" y="6" width="264" height="66"  /></g>
                <g id="yoghurtMountains" className={getClassname('yoghurtMountains')} onClick={() => onMapClick('yoghurtMountains')}><rect x="569" y="78" width="147" height="104"  /></g>
                <g id="aquaOcean" className={getClassname('aquaOcean')} onClick={() => onMapClick('aquaOcean')}><rect x="268" y="380" width="168" height="90" /></g></svg>
        </>

    );

}