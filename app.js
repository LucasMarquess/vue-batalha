new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        isWin: false,
        isDefeat: false,
        lifePlayer: 100,
        lifeInvasor: 100,
        logs: []
    },
    methods: {
        ataque(){
            let minAtackPlayer =  Math.ceil(8),
            maxAtackPlayer =  Math.floor(10),
            minAtackInvasor =  Math.ceil(7),
            maxAtackInvasor =  Math.floor(13);

            let atackPlayer = Math.floor(Math.random() * (maxAtackPlayer - minAtackPlayer) + minAtackPlayer);
            let atackInvasor = Math.floor(Math.random() * (maxAtackInvasor - minAtackInvasor) + minAtackInvasor);

            this.criaLog(atackPlayer, atackInvasor, 0);
            
            this.lifeInvasor -=  atackPlayer;
            this.lifePlayer -= atackInvasor;

            this.verificaStatus();
        },
        ataqueEspecial(){
            let minAtackPlayer =  Math.ceil(8),
            maxAtackPlayer =  Math.floor(14),
            minAtackInvasor =  Math.ceil(7),
            maxAtackInvasor =  Math.floor(13);

            let atackPlayer = Math.floor(Math.random() * (maxAtackPlayer - minAtackPlayer) + minAtackPlayer);
            let atackInvasor = Math.floor(Math.random() * (maxAtackInvasor - minAtackInvasor) + minAtackInvasor);

            this.criaLog(atackPlayer, atackInvasor, 0);
            
            this.lifeInvasor -=  atackPlayer;
            this.lifePlayer -= atackInvasor;

            this.verificaStatus();
        },
        curar(){
            let minHealPlayer =  Math.ceil(7),
            maxHealPlayer =  Math.floor(13),
            minAtackInvasor =  Math.ceil(7),
            maxAtackInvasor =  Math.floor(13);

            let healPlayer = Math.floor(Math.random() * (maxHealPlayer - minHealPlayer) + minHealPlayer);
            let atackInvasor = Math.floor(Math.random() * (maxAtackInvasor - minAtackInvasor) + minAtackInvasor);

            this.criaLog(0, atackInvasor, healPlayer);
            
            this.lifePlayer -= atackInvasor;
            this.lifePlayer + healPlayer >= 100 ?  this.lifePlayer = 100 : this.lifePlayer += healPlayer;
            
            this.verificaStatus();
        },
        iniciarOuDesistir(){
            this.gameStarted = !this.gameStarted

            this.isDefeat = false;
            this.isWin = false;
            this.lifePlayer = 100;
            this.lifeInvasor = 100;
            this.logs = [];
            
        },
        verificaStatus(){
            if(this.lifePlayer <= 0){
                this.isDefeat = true;
                this.gameStarted = false;
            }else if(this.lifeInvasor <= 0){
                this.isWin = true;
                this.gameStarted = false;
            }
        },
        getPorcentagemVida(valor){
            if(valor <= 0){
                return 0;
            }else{
                return valor;
            }
        },
        criaLog(valorPlayer, valorInvasor, curaPlayer){
            valorPlayer > 0 ? this.logs.push({
                texto: "JOGADOR ATINGIU INVASOR COM "+ valorPlayer,
                class: "player"
            }) : false;

            valorInvasor > 0 ? this.logs.push({
                texto: "INVASOR ATINGIU JOGADOR COM "+ valorInvasor,
                class: "invasor"
            }) : false;

            curaPlayer > 0 ? this.logs.push({
                texto: "JOGADOR CUROU-SE COM "+ curaPlayer,
                class: "cura"
            }) : false;
        }
    }
})