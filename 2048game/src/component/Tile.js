import React from 'react';
import cn from 'classname';

export default function Tile({id,x,y,value,isMerged,isNew}) {
    return (
    <div key={id} 
                className={cn(`tile tile-${value} tile-position-${x}-${y}`, {'tile-merged': isMerged, 'tite-new': isNew,})}>
            <div className="tile-inner">{value}</div></div>
    );
}