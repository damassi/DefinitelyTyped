import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import ImageTile from 'ol/ImageTile';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { AttributionLike } from 'ol/source/Source';
import State from 'ol/source/State';
import { TileSourceEvent } from 'ol/source/Tile';
import UrlTile from 'ol/source/UrlTile';
import Tile, { LoadFunction, UrlFunction } from 'ol/Tile';
import TileCache from 'ol/TileCache';
import TileGrid from 'ol/tilegrid/TileGrid';
export interface Options {
    attributions?: AttributionLike;
    attributionsCollapsible?: boolean;
    cacheSize?: number;
    crossOrigin?: string;
    opaque?: boolean;
    projection?: ProjectionLike;
    reprojectionErrorThreshold?: number;
    state?: State;
    tileClass?: ImageTile;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio?: number;
    tileUrlFunction?: UrlFunction;
    url?: string;
    urls?: string[];
    wrapX?: boolean;
    transition?: number;
    key?: string;
}
export default class TileImage extends UrlTile {
    constructor(options: Options);
    protected crossOrigin: string;
    protected tileCacheForProjection: { [key: string]: TileCache };
    protected tileClass: ImageTile;
    protected tileGridForProjection: { [key: string]: TileGrid };
    protected getTileInternal(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    getGutter(): number;
    setRenderReprojectionEdges(render: boolean): void;
    setTileGridForProjection(projection: ProjectionLike, tilegrid: TileGrid): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
