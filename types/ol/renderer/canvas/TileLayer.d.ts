import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import Layer, { State } from 'ol/layer/Layer';
import TileLayer from 'ol/layer/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import { FrameState } from 'ol/PluggableMap';
import Projection from 'ol/proj/Projection';
import IntermediateCanvasRenderer from 'ol/renderer/canvas/IntermediateCanvas';
import MapRenderer from 'ol/renderer/Map';
import Tile from 'ol/Tile';
export default class CanvasTileLayerRenderer extends IntermediateCanvasRenderer {
    constructor(tileLayer: TileLayer | VectorTileLayer, opt_noContext?: boolean);
    protected zDirection: number;
    protected context: CanvasRenderingContext2D;
    protected renderedRevision: number;
    protected renderedTiles: Tile[];
    protected tmpExtent: Extent;
    protected getTileImage(tile: Tile): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    create(mapRenderer: MapRenderer, layer: Layer): CanvasTileLayerRenderer;
    drawTileImage(
        tile: Tile,
        frameState: FrameState,
        layerState: State,
        x: number,
        y: number,
        w: number,
        h: number,
        gutter: number,
        transition: boolean
    ): void;
    getLayer(): TileLayer | VectorTileLayer;
    getLayer(): Layer;
    handles(layer: Layer): boolean;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    on(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (param0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (param0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
