import { MolangVariableMap, system, world } from "@minecraft/server"

/**
 * @typedef {Object} Particles
 * @property {string} typeId
 * @property {number} [delay]
 */

export default class ParticleSpawner {

    /** @type {Particles[]} */
    #particles = undefined

    /** @param {Particles[]} particles  */
    constructor(particles) {
        this.#particles = particles;
    }

    /**
     * @callback MolangVariableMapCallback
     * @argument {import("@minecraft/server").MolangVariableMap} molang
     * @argument {import("@minecraft/server").Vector3} location
     */

    /** 
     * @param {"overworld" | "nether" | "end"} dimension 
     * @param {import("@minecraft/server").Vector3} location
     * @param {MolangVariableMapCallback} molang
     */
    dimension(dimension, location, molang) {
        const Molang = new MolangVariableMap();

        molang(Molang, location)
        const { length } = this.#particles;

        for (let index = 0; index < length; index++) {
            const { typeId, delay } = this.#particles[index];

            system.runTimeout(() => {
                const molangVariable = new MolangVariableMap();
                molang(molangVariable, location);
                world.getDimension(dimension).spawnParticle(typeId, location, molangVariable)
            }, delay)
        }
    }

    /** 
     * @param {import("@minecraft/server").Player} player 
     * @param {MolangVariableMapCallback} molang
     * @param {import("@minecraft/server").Vector3} [location]
     */
    player(player, molang, location) {

        location ??= player.location

        const { length } = this.#particles;

        for (let index = 0; index < length; index++) {
            const { typeId, delay } = this.#particles[index];

            system.runTimeout(() => {
                const molangVariable = new MolangVariableMap();
                molang(molangVariable, location);
                player.spawnParticle(typeId, location, molangVariable)
            }, delay)
        }
    }
}
