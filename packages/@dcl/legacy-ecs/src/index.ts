// CORE DEPENDENCIES
export * from './ecs/Attachable'
export * from './ecs/Engine'
export * from './ecs/Component'
export * from './ecs/ComponentGroup'
export * from './ecs/Entity'
export * from './ecs/IEntity'
export * from './ecs/Task'
export * from './ecs/helpers'
export * from './ecs/Observable'
export * from './ecs/UIValue'
export * from './ecs/EventManager'
export * from './ecs/UserActions'

import { _initEventObservables } from './decentraland/Events'
import { DecentralandSynchronizationSystem } from './decentraland/Implementation'

// ECS INITIALIZATION
import { Engine } from './ecs/Engine'
import { Entity } from './ecs/Entity'

const entity = new Entity('scene')
;(entity as any).uuid = '0'

// Initialize engine
/** @public */
const engine = new Engine(entity)

import { DisposableComponent } from './ecs/Component'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DisposableComponent.engine = engine

// Initialize Decentraland interface
if (typeof dcl !== 'undefined') {
  engine.addSystem(new DecentralandSynchronizationSystem(dcl), Infinity)
  _initEventObservables(dcl)
}

import {
  uuidEventSystem,
  pointerEventSystem,
  raycastEventSystem
} from './decentraland/Systems'

// Initialize UUID Events system
engine.addSystem(uuidEventSystem)
// Initialize Pointer Events System
engine.addSystem(pointerEventSystem)
// Initialize Raycast Events System
engine.addSystem(raycastEventSystem)

// DECENTRALAND DEPENDENCIES
export * from './decentraland/Math'
export * from './decentraland/Types'
export * from './decentraland/Components'
export * from './decentraland/Systems'
export * from './decentraland/Events'
export * from './decentraland/Camera'
export * from './decentraland/AnimationState'
export * from './decentraland/Input'
export * from './decentraland/Audio'
export * from './decentraland/Gizmos'
export * from './decentraland/UIShapes'
export * from './decentraland/AvatarShape'
export * from './decentraland/UIEvents'
export * from './decentraland/MessageBus'
export * from './decentraland/PhysicsCast'

export { engine }
