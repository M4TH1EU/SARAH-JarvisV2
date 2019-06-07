exports.init = function(SARAH, SARAH2){
    console.log('Jarvis initialisation terminée.');
}
     
exports.action = function(data, callback, config, SARAH) {

    config = config.modules.jarvis;
    var exec = require('child_process').exec;
    
    switch(data.val) {

        //Tu es là ?
        case "la":
            var Txt = new Array;
            Txt[0] = "oui monsieur";
            Txt[1] = "oui monsieur, que puije pour vous";
            Txt[2] = "biensur";
            Txt[3] = "comme toujours";
            Txt[4] = "oui";
            Txt[4] = "Pour vous monsieur, toujours";
            break;



        /*** - - - - - - - - - - - - - - DATE & HEURE - - - - - - - - - - - - - - ***/

        //Donne l'heure
        case "time":
            var date = new Date();
            var Txt = new Array;
            var text = 'il est ' + date.getHours() + ' heure ';
            if (date.getMinutes() > 0){ 
            text += date.getMinutes();
            }
            text += ' [name]';
            
            Txt[0] = text;
            break;        

        case "date":
            var Txt = new Array;
            var moment = require('moment');
	        moment.lang('fr');
            var datedujour = moment().format("dddd, DD MMMM YYYY, HH [heure] mm");
        
            Txt[0] = "Nous sommes le " + datedujour;
            Txt[1] = "La date du jour est le " + datedujour;
            Txt[2] = "Aujourd'hui nous sommes le " + datedujour;

            break;



        /*** - - - - - - - - - - - - - - AFFICHAGE ECRAN - - - - - - - - - - - - - - ***/

        //Affiche son interface sur Rainmeter.
        case "program_run_jarvis":
            var process = '%CD%/plugins/jarvis/bin/program_run_jarvis.bat';
            var Txt = new Array;
            Txt[0] = "je l'affiche";
            Txt[1] = "je lance mon interface";
            Txt[2] = "je m'en auccupe";
            Txt[3] = "tout de suite";
            break;

        //Ferme son interface sur Rainmeter.
        case "program_close_jarvis":
            var process = '%CD%/plugins/jarvis/bin/program_close_jarvis.bat';
            var Txt = new Array;
            Txt[0] = "c'est fait monsieur";
            Txt[1] = "je l'ai fermé";
            Txt[2] = "interface fermé";
            Txt[3] = "je l'ai masqué";
            Txt[4] = "je l'ai désactivé";
            break;

        //Affiche le bureau
        case "action_minimize":
            process = '%CD%/plugins/jarvis/bin/action_minimize.vbs';
            var Txt = new Array;
            Txt[0] = "vous etes sur le bureau";
            Txt[1] = "voici le bureau";
            Txt[2] = "affichage du bureau";
            Txt[3] = "vous voici sur le bureau monsieur"
            break;

        //Restaure les fenêtres
        case "action_restore":
            process = '%CD%/plugins/jarvis/bin/action_restore.vbs';
            var Txt = new Array;
            Txt[0] = "affichage des fenêtres";
            Txt[1] = "restoration des fenêtres";
            Txt[2] = "je remet les fenêtres";
            Txt[3] = "tout de suite";
            Txt[4] = "tout de suite monsieur";
            break;

    	//Exemple ouverture et fermeture d'un jeu.
        /*case "runminncraft":
            var process = '%CD%/plugins/jarvis/bin/runmincraft.bat';
            var Txt = new Array;
            Txt[0] = "c'est fait monsieur creusé bien";
            Txt[1] = "bon jeux";
            Txt[2] = "amusez vous bien";
            Txt[3] = "c'est partis";
            break;

        case "closeminncraft":
            var process = '%CD%/plugins/jarvis/bin/Closemincraft.bat';
            var Txt = new Array;
            Txt[0] = "je ferm";
            Txt[1] = "je le ferm";
            Txt[2] = "c'est fermé";
            Txt[3] = "tout de suite";
            Txt[4] = "tout de suite monsieur";
            Txt[5] = "le jeux est fermé";
            Txt[5] = "finis de jouer monsieur";
			break;*/



        /*** - - - - - - - - - - - - - - PAGE INTERNET - - - - - - - - - - - - - - ***/

        //Rafraichissement de la page
        case "action_f5":
            process = '%CD%/plugins/jarvis/bin/action_f5.vbs';
            var Txt = new Array;
            Txt[0] = "voilà";
            Txt[1] = "j'ai actualisé la page";
            Txt[2] = "c'est fait";
            Txt[3] = "voilà monsieur";
            Txt[4] = "tout de suite";
            Txt[5] = "tout de suite monsieur";
            break;

        //Affiche la page web
        case "url_home":
            process = '%CD%/plugins/jarvis/bin/url_home.bat';
            var Txt = new Array;
            Txt[0] = "voilà mon panneau de configuration";
            Txt[1] = "des réglages à faire, Monsieur ?";
            Txt[2] = "c'est fait";
            Txt[3] = "voilà le home";
            break;

        //Affiche le store de S.A.R.A.H sur le panel admin.
        case "url_store":
            process = '%CD%/plugins/jarvis/bin/url_store.bat';
            var Txt = new Array;
            Txt[0] = "tout de suite";
            Txt[1] = "j'ouvre la page";
            Txt[2] = "je vais recevoir un nouveau pluguine";
            Txt[3] = "je vous ouvre ça";
            Txt[4] = "voilà le store Monsieur";
            break;

        //Affiche la page de la box internet (192.168.1.1)	
        case "url_box":
            process = '%CD%/plugins/jarvis/bin/url_box.bat';
            var Txt = new Array;
            Txt[0] = "tout de suite";
            Txt[1] = "j'ouvre la page";
            Txt[2] = "j'ouvre la box";
            Txt[3] = "je vous ouvre ça";
            Txt[4] = "voilà la page de votre box";
            Txt[5] = "page de configuration de la box";
            break;

        //Ferme l'onglet
        case "action_f4":
            process = '%CD%/plugins/jarvis/bin/action_f4.vbs';
            var Txt = new Array;
            Txt[0] = "voilà";
            Txt[1] = "onglet fermé";
            Txt[2] = "c'est fait";
            Txt[3] = "voilà monsieur";
            Txt[4] = "tout de suite";
            Txt[5] = "tout de suite monsieur";
            break;

        //Ouvre la page facebook.com
        case "url_facebook":
            process = '%CD%/plugins/jarvis/bin/url_facebook.bat';
            var Txt = new Array;
            Txt[0] = "voilà fessbouque";
            Txt[1] = "c'est fait";
            Txt[2] = "voilà monsieur";
            Txt[3] = "tout de suite";
            Txt[4] = "tout de suite monsieur";
            break;

        //Ouvre la page youtube.com
        case "url_youtube":
            process = '%CD%/plugins/jarvis/bin/url_youtube.bat';
            var Txt = new Array;
            Txt[0] = "voilà youtube";
            Txt[1] = "c'est fait";
            Txt[2] = "voilà monsieur";
            Txt[3] = "tout de suite";
            Txt[4] = "tout de suite monsieur";
            break;



        /*** - - - - - - - - - - - - - - DOSSIERS & EXPLORATEUR - - - - - - - - - - - - - - ***/

        //Ouvre le dossier des plugins
        case "explorer_plugins":
            var process = '%CD%/plugins/jarvis/bin/explorer_plugins.bat';
            var Txt = new Array;
            Txt[0] = "j'ouvre le dossier";
            Txt[1] = "voici mes pluguine";
            Txt[2] = "tout de suite";
            break;

        //Ouvre le dossier principal de Jarvis
        case "explorer_jarvis":
            var process = '%CD%/plugins/jarvis/bin/explorer_jarvis.bat';
            break;

        //Affiche le dossier "Images"
        case "explorer_images":
            var process = '%CD%/plugins/jarvis/bin/explorer_images.bat';
            break;

        //Affiche le dossier "Documents"
        case "explorer_documents":
            var process = '%CD%/plugins/jarvis/bin/explorer_documents.bat';
            break;

        //Affiche le dossier "Téléchargements"
        case "explorer_dl":
            var process = '%CD%/plugins/jarvis/bin/explorer_dl.bat';
            break;

        //Affiche les disques
        case "explorer_disks":
            var process = '%CD%/plugins/jarvis/bin/explorer_disks.bat';
            break;



        /*** - - - - - - - - - - - - - - LANCEMENT & FERMETURE DE LOGICIELS - - - - - - - - - - - - - - ***/

        //Lancement de firefox
        case "program_run_firefox":
            var process = '%CD%/plugins/jarvis/bin/program_run_firefox.bat';
            var Txt = new Array;
            Txt[0] = "j'ouvre failleur fox";
            Txt[1] = "je lance failleur fox";
            Txt[2] = "bon surf monsieur";
            Txt[3] = "tout de suite";
            Txt[4] = "tout de suite";
            break;

        //Fermeture de firefox
        case "program_close_firefox":
            var process = '%CD%/plugins/jarvis/bin/program_close_firefox.bat';
            var Txt = new Array;
            Txt[0] = "c'est fait monsieur";
            Txt[1] = "je l'ai fermé";
            Txt[2] = "failleur fox fermé";
            break;

        //Lancement de Sublime Text
        case "program_run_sublimetext":
            var process = '%CD%/plugins/jarvis/bin/program_run_sublimetext.bat';
            var Txt = new Array;
            Txt[0] = "j'ouvre l'editeur";
            Txt[1] = "je lance notpade";
            Txt[2] = "tout de suite";
            break;

        //Fermeture de Sublime Text
        case "program_close_sublimetext":
            var process = '%CD%/plugins/jarvis/bin/program_close_sublimetext.bat';
            var Txt = new Array;
            Txt[0] = "éditeur fermé monsieur";
            Txt[1] = "je l'ai fermé";
            Txt[2] = "notpad fermé";
            break;

        //Lancement de discord
        case "program_run_discord":
            var process = '%CD%/plugins/jarvis/bin/program_run_discord.bat';
            var Txt = new Array;
            Txt[0] = "j'ouvre discorde";
            Txt[1] = "je lance discorde";
            Txt[2] = "tout de suite";
            Txt[3] = "tout de suite monsieur";
            break;

        //Fermeture de discord
        case "program_close_discord":
            var process = '%CD%/plugins/jarvis/bin/program_close_discord.bat';
            var Txt = new Array;
            Txt[0] = "discord fermé monsieur";
            Txt[1] = "je l'ai fermé";
            Txt[2] = "discord fermé";
            break;



        /*** - - - - - - - - - - - - - - ACTIONS - - - - - - - - - - - - - - ***/

        //Précédent
        case "action_precedent":
            process = '%CD%/plugins/jarvis/bin/action_precedent.vbs';
            var Txt = new Array;
            Txt[0] = "retour en arrière";
            Txt[1] = "précédent";
            break;

        //Suivant
        case "action_next":
            process = '%CD%/plugins/jarvis/bin/action_next.vbs';
            var Txt = new Array;
            Txt[0] = "suivant";
            break;

        //Entrer/Valider
        case "action_enter":
            process = '%CD%/plugins/jarvis/bin/action_enter.vbs';
            var Txt = new Array;
            Txt[0] = "je valide";
            break;

        //Sauvegarder (CTRL + S)
        case "action_save":
            process = '%CD%/plugins/jarvis/bin/action_save.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait";
            Txt[1] = "je sauvegarde";
            Txt[2] = "sauvegarde éffectué";
            Txt[3] = "fichier sauvegardé";
            Txt[4] = "c'est fait monsieur";
            Txt[5] = "je sauvegarde monsieur";
            Txt[6] = "sauvegarde éffectué monsieur";
            Txt[7] = "fichier sauvegardé monsieur";
            break;

        //Tabulation	
        case "action_tab":
            process = '%CD%/plugins/jarvis/bin/action_tab.vbs';
            var Txt = new Array;
            Txt[0] = "fenêtre suivante";
            Txt[1] = "changement de fenêtre";
            break;

        //Fermer une fenêtre
        case "action_close_window":
            process = '%CD%/plugins/jarvis/bin/action_close_window.vbs';
            var Txt = new Array;
            Txt[0] = "je ferme";
            Txt[1] = "fermeture de la fenêtre";
            Txt[2] = "fermeture de la page";
            Txt[3] = "c'est fermé";
            Txt[4] = "tout de suite";
            Txt[5] = "tout de suite monsieur";
            break;

        //Ferme les principales fenêtres du système.
        case "system_quit_all":
            var process = '%CD%/plugins/jarvis/bin/system_quit_all.bat';
            var Txt = new Array;
            Txt[0] = "tout est fermé";
            Txt[1] = "je m'en auccupe";
            Txt[2] = "tout de suite";
            Txt[3] = "c'est fait";
            break;



        /*** - - - - - - - - - - - - - - GESTION DU PC - - - - - - - - - - - - - - ***/

        //Éteindre le PC
        case "pc_shutdown":
            var Txt = new Array;
            Txt[0] = "je ferme la boutique";
            Txt[1] = "arret de l'ordinateur en cours";
            Txt[2] = "arret de l'ordinateur en cours Monsieur";
            Txt[3] = "arret en cours";
            Txt[4] = "j'éteint l'ordinateur";
            var process = '%CD%/plugins/jarvis/bin/pc_shutdown.bat';
            break;

        //Redémarrer le PC
        case "pc_restart":
            var Txt = new Array;
            Txt[0] = "redémarrage de l'ordinateur en cours";
            Txt[1] = "redémarrage de l'ordinateur en cours Monsieur";
            Txt[2] = "redémarrage en cours";
            Txt[3] = "je redémarre l'ordinateur";
            var process = '%CD%/plugins/jarvis/bin/pc_restart.bat';
            break;

        //Coupe le son
        case "pc_mute":
            var Txt = new Array;
            Txt[0] = "Système muet.";
            Txt[1] = "Je coupe le son";
            var process = '%CD%/plugins/jarvis/bin/pc_mute.bat';
            break;

        //Remet le son
        case "pc_unmute":
            var process = '%CD%/plugins/jarvis/bin/pc_unmute.bat';
            var Txt = new Array;
            Txt[0] = "J'active le son";
            Txt[1] = "Je remet le son";
            break;

        //Désactive le bureau
        case "pc_desktop_hide":
            var Txt = new Array;
            var process = '%CD%/plugins/jarvis/bin/pc_desktop_hide.bat';
            Txt[0] = "Le bureau est désactivé monsieur";
            Txt[1] = "Je masque le bureau";
            break;

        //Active le bureau
        case "pc_desktop_show":
            var Txt = new Array;
            var process = '%CD%/plugins/jarvis/bin/pc_desktop_show.bat';
            Txt[0] = "Le bureau est activé monsieur";
            Txt[1] = "J'affiche le bureau";
            break;

        //Active le bureau
        case "pc_veille":
            var Txt = new Array;
            var process = '%CD%/plugins/jarvis/bin/pc_veille.bat';
            Txt[0] = "Je passe l'ordinateur en veille";
            Txt[1] = "Activation du mode veille";
            break;
        


        /*** - - - - - - - - - - - - - - GESTION DE JARVIS - - - - - - - - - - - - - - ***/

		//Redèmarrage de Jarvis (S.A.R.A.H)
        case "jarvis_reboot":
            var process = '%CD%/plugins/jarvis/bin/SARAH_Restart.vbs';
            break;



        /*** - - - - - - - - - - - - - - GESTION DES PÉRIPHÉRIQUES - - - - - - - - - - - - - - ***/

        //action_enter déjà défini (L. 303)

        //Éteint l/les écran(s)
        case "system_screen_off":
            process = '%CD%/plugins/jarvis/bin/system_screen_off.bat';
            var Txt = new Array;
            Txt[0] = "les écrans s'éteignent";
            Txt[1] = "voila, écrans éteint monsieur";
            Txt[2] = "tout de suite";
            Txt[3] = "tout de suite monsieur";
            break;

        //Allume l/les écran(s)
        case "system_screen_on":
            process = '%CD%/plugins/jarvis/bin/system_screen_on.vbs';
            var Txt = new Array;
            Txt[0] = "les écrans s'allument";
            Txt[1] = "voila, écrans allumés monsieur";
            Txt[2] = "tout de suite";
            Txt[3] = "tout de suite monsieur";
            break;

        //Ouvre le lecteur DVD
        case "system_dvd_on":
            process = '%CD%/plugins/jarvis/bin/system_dvd_on.bat';
            var Txt = new Array;
            Txt[0] = "lecteur ouvert";
            Txt[1] = "le lecteur est ouvert";
            Txt[2] = "c'est fait";
            Txt[3] = "c'est fait monsieur";
            Txt[4] = "tout de suite";
            Txt[5] = "tout de suite monsieur";
            break;

        //Ferme le lecteur DVD
        case "system_dvd_off":
            process = '%CD%/plugins/jarvis/bin/system_dvd_off.bat';
            var Txt = new Array;
            Txt[0] = "je le ferm";
            Txt[1] = "fermeture du lecteur";
            Txt[2] = "lecteur fermé";
            Txt[3] = "c'est fermé";
            Txt[4] = "tout de suite";
            Txt[5] = "tout de suite monsieur";
            break;



        /*** - - - - - - - - - - - - - - DISCUTIONS  - - - - - - - - - - - - - - ***/

        //Comment ça va ?
        case "humeur":
            var reponses = [
                "Ca va bien, Monsieur, et vous ?",
                "Comme d'habitude Monsieur, et vous ?",
                "Je me sens bien, merci. Et vous ?",
                "Je sens que mes circuit chauffe un peu, mais ça va. Et vous ?"
            ];
            
            var choix = Math.floor(Math.random() * reponses.length);
            var answer = reponses[choix];
            
            SARAH.askme(answer, {
                "très bien": 'good', "très bien merci": 'good',
                "bien": 'good',
                "je vais bien": 'good',
                "comme d'habitude": 'good',
                "ça va": 'good', 
                "sa va": 'good', 
                "tranquille": 'good',
                "pas très bien": 'bad',
                "pas super": 'bad',
                "pas top": 'bad',
                "bof": 'bad',
            }, 10000, function(answer, end){ // the selected answer or false 
                if(answer == 'bad') {
                    var reponses4Bad = [
                        "J'en suis navré Monsieur. Que puis-je faire pour vous remonter le moral",
                        "Ah mince, que puis-je faire pour vous ",
                        "Je suis désolé pour vous, que puis-je faire pour vous ?",
                        "Ah mince, n'hésitez pas à soliciter mon aide",
                        "ça change de d'habitude Monsieur, que puis-je faire pour vous remonter le moral ?"
                    ];
            
                    var choix = Math.floor(Math.random() * reponses4Bad.length);
                    var answer4Bad = reponses4Bad[choix];
            
                    SARAH.speak(answer4Bad);
                } else {
                    var reponses4Good = [
                        "Super, que puis-je faire pour vous ?",
                        "Génial, que puis-je faire pour vous ?",
                        "Je suis content pour vous Monsieur",
                        "Super, n'hésitez pas à soliciter mon aide",
                        "Ah ! Je suis content pour vous Monsieur"
                    ];
            
                    var choix = Math.floor(Math.random() * reponses4Good.length);
                    var answer4Good = reponses4Good[choix];
            
                    SARAH.speak(answer4Good);
                }
                end();
            });
            break;

        //Réponds au merci
        case "merci":
            var Txt = new Array;
            Txt[0] = "Mais derien Monsieur";
            Txt[1] = "Derien";
            Txt[2] = "Sans moi vous seriez perdu Monsieur !";
            Txt[3] = "Pas de problème";
            Txt[4] = "Pas de soucis Monsieur";
            Txt[5] = "C'est un honneur.";
            Txt[6] = "Ah! J'ai failli attendre monsieur";
            break;

        //Dis bonjour à Cynthia
        case "dis_bonjour_a_cynthia":
            var Txt = new Array;
            Txt[0] = "Bonjour cintia.";
            Txt[1] = "Bien le bonjour Madame";
            Txt[2] = "Bonjour Madame";
            Txt[3] = "Bonjour cintia, c'est un honneur";
            Txt[4] = "Bonjour Madame, c'est un honneur";
            break;

        //Dis bonjour à Patrick
        case "dis_bonjour_a_patrick":
            var Txt = new Array;
            Txt[0] = "Bonjour Patrick.";
            Txt[1] = "Bien le bonjour Monsieur";
            Txt[2] = "Bonjour Monsieur";
            Txt[3] = "Bonjour Patrick, c'est un honneur";
            Txt[4] = "Bonjour Monsieur, c'est un honneur";
            break;

        //Bonjour 
        case "bonjour":
            var Txt = new Array;
            Txt[0] = "Bonjour Monsieur.";
            Txt[1] = "Bien le bonjour Monsieur";
            break;
    }



    var child = exec(process,
        function(error, stdout, stderr) {
            console.log(process);
        });
    Choix = Math.floor(Math.random() * Txt.length);
    callback({
        'tts': Txt[Choix]
    });

}