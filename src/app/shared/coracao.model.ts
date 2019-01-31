export class Coracao {

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracao-cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao-vazio.png'

    ){}

    public exibeCoracao(): string {
       
        if ( this.cheio ){
            return this.urlCoracaoCheio

        } else {
            return this.urlCoracaoVazio
        }
    }

}