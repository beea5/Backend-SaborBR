
import prismaClient from "../prisma";

class CraeteCustumerService{
    async execute(){

        console.log("ROTA FOI CHAMADA");

        return { ok: true }
    }
}

export { CraeteCustumerService }