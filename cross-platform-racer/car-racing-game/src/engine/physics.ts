class Physics {
    constructor() {
        this.gravity = 9.81; // Gravity constant
        this.friction = 0.5; // Friction coefficient
    }

    update(entities, deltaTime) {
        entities.forEach(entity => {
            if (entity.isDynamic) {
                this.applyGravity(entity, deltaTime);
                this.applyFriction(entity, deltaTime);
                this.checkCollisions(entity, entities);
            }
        });
    }

    applyGravity(entity, deltaTime) {
        entity.velocity.y += this.gravity * deltaTime;
        entity.position.y += entity.velocity.y * deltaTime;
    }

    applyFriction(entity, deltaTime) {
        entity.velocity.x *= (1 - this.friction * deltaTime);
        entity.position.x += entity.velocity.x * deltaTime;
    }

    checkCollisions(entity, entities) {
        entities.forEach(other => {
            if (entity !== other && this.isColliding(entity, other)) {
                this.resolveCollision(entity, other);
            }
        });
    }

    isColliding(entityA, entityB) {
        // Simple AABB collision detection
        return entityA.position.x < entityB.position.x + entityB.width &&
               entityA.position.x + entityA.width > entityB.position.x &&
               entityA.position.y < entityB.position.y + entityB.height &&
               entityA.position.y + entityA.height > entityB.position.y;
    }

    resolveCollision(entityA, entityB) {
        // Basic collision resolution logic
        const overlapX = (entityA.width + entityB.width) / 2 - Math.abs(entityA.position.x - entityB.position.x);
        const overlapY = (entityA.height + entityB.height) / 2 - Math.abs(entityA.position.y - entityB.position.y);

        if (overlapX < overlapY) {
            if (entityA.position.x < entityB.position.x) {
                entityA.position.x -= overlapX;
            } else {
                entityA.position.x += overlapX;
            }
        } else {
            if (entityA.position.y < entityB.position.y) {
                entityA.position.y -= overlapY;
            } else {
                entityA.position.y += overlapY;
            }
        }
    }
}

export default Physics;