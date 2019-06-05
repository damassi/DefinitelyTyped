import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import Geometry from 'ol/geom/Geometry';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { FillStrokeState, DeclutterGroup } from 'ol/render/canvas';
import RenderFeature from 'ol/render/Feature';
import VectorContext from 'ol/render/VectorContext';
import { Transform } from 'ol/transform';
export default class CanvasReplay extends VectorContext {
    constructor(
        tolerance: number,
        maxExtent: Extent,
        resolution: number,
        pixelRatio: number,
        overlaps: boolean,
        declutterTree: any
    );
    protected overlaps: boolean;
    protected instructions: any[];
    protected hitDetectionInstructions: any[];
    protected coordinates: number[];
    protected state: FillStrokeState;
    protected pixelRatio: number;
    protected tolerance: number;
    protected maxLineWidth: number;
    protected applyPixelRatio(dashArray: number[]): number[];
    protected getBufferedMaxExtent(): Extent;
    protected beginGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    protected appendFlatCoordinates(
        flatCoordinates: number[],
        offset: number,
        end: number,
        stride: number,
        closed: boolean,
        skipFirst: boolean
    ): number;
    protected resolution: number;
    protected maxExtent: Extent;
    replayImage_(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        anchorX: number,
        anchorY: number,
        declutterGroup: DeclutterGroup,
        height: number,
        opacity: number,
        originX: number,
        originY: number,
        rotation: number,
        scale: number,
        snapToPixel: boolean,
        width: number,
        padding: number[],
        fillInstruction: any[],
        strokeInstruction: any[]
    ): void;
    finish(): void;
    drawCustomCoordinates_(
        flatCoordinates: number[],
        offset: number,
        ends: number[],
        stride: number,
        replayEnds: number[]
    ): number;
    drawCustom(): void;
    drawCustom(geometry: SimpleGeometry, feature: Feature | RenderFeature, renderer: () => void): void;
    renderDeclutter_(declutterGroup: DeclutterGroup, feature: Feature | RenderFeature): void;
    replay(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        skippedFeaturesHash: { [key: string]: boolean },
        snapToPixel: boolean
    ): void;
    replayHitDetection<T>(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        skippedFeaturesHash: { [key: string]: boolean },
        opt_featureCallback?: () => void,
        opt_hitExtent?: Extent
    ): T;
    endGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    replayTextBackground_(
        context: CanvasRenderingContext2D,
        p1: Coordinate,
        p2: Coordinate,
        p3: Coordinate,
        p4: Coordinate,
        fillInstruction: any[],
        strokeInstruction: any[]
    ): void;
    createStroke(state: FillStrokeState): any[];
    reverseHitDetectionInstructions(): void;
    createFill(state: FillStrokeState, geometry: Geometry | RenderFeature): any[];
    applyStroke(state: FillStrokeState): void;
    updateFillStyle(
        state: FillStrokeState,
        createFill: (this: CanvasReplay, param1: FillStrokeState, param2: Geometry | RenderFeature) => any[],
        geometry: Geometry | RenderFeature
    ): void;
    updateStrokeStyle(state: FillStrokeState, applyStroke: (this: CanvasReplay, param1: FillStrokeState) => void): void;
}
