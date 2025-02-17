class jeu{
    constructor(){
        let niveau_difficulté=0;
        let nb_tentatives=0;
        let intervalle=0;
    }
    ChoisirDifficulté(){
        let choix="0";
        while(choix!=="1" && choix!=="2" && choix!=="3"){
            choix=prompt("choisir le niveau de difficulté: \n1/ facile (1-50, 10 tentatives)\n \n2/ intermediaire (1-100, 7 tentatives)\n \n3/difficile(1-200, 5 tentatives)\n" );
        }
        choix=Number(choix);
        if(choix==1){
            this.nb_tentatives=10;
            this.intervalle=10;
        }
        else if(choix==2){
            this.nb_tentatives=6;
            this.intervalle=50;
        }
        else{
            this.nb_tentatives=3;
            this.intervalle=100;
        }
    }
    GenererAlea(){
        let NombreAdeviner=0;
        NombreAdeviner=Math.floor(this.intervalle*Math.random())+1;
        return NombreAdeviner ;
    }
    EntrerUnNumero(tentative,NombreAdeviner){
        let essai=0;
        essai=+prompt(`donner votre ${tentative}/${this.nb_tentatives} tentative:`);
        if(essai==NombreAdeviner){
            alert("Parfait!");
        }
        else if(essai<NombreAdeviner){
            alert("Trop petit!");
        }
        if(essai>NombreAdeviner){
            alert("Trop Grand!");
        }
        
        return essai==NombreAdeviner ;
    }
    jouer(){
        alert("Bienvenue au jeu du nombre caché !");
        alert("La règle est simple! L'idée est de deviner le numéro généré aléatoirement appartenant à un intervalle donné.");
        alert("C'est parti! You Got This :D !");
        this.ChoisirDifficulté();
        let essaier=1
        let test=0;
        while(essaier<=this.nb_tentatives && test==0){
            let Nombre_Adeviner=this.GenererAlea();
            let res=this.EntrerUnNumero(essaier,Nombre_Adeviner);
            if(res==Nombre_Adeviner){
            alert(`Vous avez deviné le numero au ${essaier} essai!`);
            test=1;
            }
            essaier=essaier+1;    
        }
        if(essaier==this.nb_tentatives+1 && test==0){alert("Vous avez échoué! :( ");}
        let rejeu=this.rejouer();

    }
    rejouer(){
        let choisir=confirm("Une autre partie? Allons-y !");
        if(choisir==0){
            alert("Au revoir!");
            return;
        }
        else{this.jouer();}
    }
}
partie=new jeu();
partie.jouer();
