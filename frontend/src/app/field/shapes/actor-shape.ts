import { Shape } from "./shape";
import { Actor } from "../entity/actor";
import { ShapeFieldPosition } from "../value/shape-field-position";
import { Position } from "../value/position";
import { ShapeFieldPositionDto } from "../dto/shape-field-position-dto";
import { ActorShapeDto } from "../dto/actor-shape-dto";

export abstract class ActorShape extends Shape {
  protected rotationOffset: Position;

  protected fieldPositions: Map<string, ShapeFieldPosition>;
  protected _rotationUUID: string;

  constructor(
    public actor: Actor,
    context: CanvasRenderingContext2D,
    field_positions?: Map<string, ShapeFieldPosition>
  ) {
    super(context);
    if (field_positions) {
      this.fieldPositions = field_positions;
    } else {
      this.fieldPositions = new Map();
    }
  }

  toDto(): ActorShapeDto {
    return {
      f: [...this.fieldPositions.entries()].map(([uuid, fieldPosition]) => {
        return {
          x: Number(fieldPosition.x.toFixed(0)).valueOf(),
          y: Number(fieldPosition.y.toFixed(0)).valueOf(),
          u: uuid,
        } as ShapeFieldPositionDto;
      }),
    };
  }

  public override draw(): void {
    super.draw();
    this.drawPosition();
    this.drawActorName();
  }

  protected currentPosition(): Position {
    return this.actor.position.rotate(this.rotationOffset);
  }

  abstract drawPosition(): void;

  abstract drawActorName(): void;

  public setPosition(x: number, y: number): void {
    this.fieldPositions.set(this._rotationUUID, {
      x: this.toDiscreteX(x),
      y: this.toDiscreteY(y),
    });
  }

  get x(): number {
    return this.fromDiscreteX(this.getFieldPosition().x);
  }

  get y(): number {
    return this.fromDiscreteY(this.getFieldPosition().y);
  }

  public getFieldPosition(): ShapeFieldPosition {
    return this.fieldPositions.get(this._rotationUUID)!;
  }

  public setRotationProperties(rotationUUID: string, rotationPosition: Position): void {
    const prevUUID = this._rotationUUID;
    this._rotationUUID = rotationUUID;
    this.rotationOffset = rotationPosition;

    if (this.fieldPositions.size === 0) {
      this.setPosition(this.context.canvas.width / 2, this.context.canvas.height / 2);
    } else if (!this.fieldPositions.has(rotationUUID)) {
      const prevPosition = this.fieldPositions.get(prevUUID)!;
      this.setPosition(this.context.canvas.width * prevPosition.x, this.context.canvas.height * prevPosition.y);
    }
  }

  public removeRotation(uuid: string): void {
    this.fieldPositions.delete(uuid);
  }
}