class Player {
    constructor(name,position) {
        this.name = name;
        this.position = position;
    }

describe () {
    return `${this.name} plays ${this.position},`;
}
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error (`You can only add an instance of Player. Argument is not a player: ${player}`)
        }
    }
    describe (){
        return `${this.name} has ${this.players.length} players.`
    }
}


class Menu {
    constructor () {
        this.teams = [];
        this.selected = null;
    }
    start () {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    thise.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
    alert ('Goodbye!');
    }

    showMainMenuOptions {
        return prompt (`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt (`
        0) bacl
        1)create payer
        2) delete player
        ---
        ${teamInfo}
        `);
    }
    
    displayTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++){
            teamsString += i + ') ' + this.teams[i].name + '\n';
        }
        alert (teamString);
    }
creatTeam(){
    let name = prompt ('Enter name for team:'):
    this.teams.oush (new Team(name));
}
viewTeam {
    let index = prompt ('Enter the index of the team you wish to view:')
    if (index > -1 && index <this.teams.length){
        this.selectedTeam = this.teams[index];
    let descrription = 'Team Name: ' +this.selectedTeam.name + '\n';

    for(let i = 0; i < this.selectedTeam.players.length; i++) {
        description += i = ') ' + this.selectedTeam.player[i].name + ' - ' + this.selectedTeam.players[i].popsition + '\n';
    }
    let selection = this.showTeamMenuOptions(descrription)
    switch (selection) {
        case '1':
            this.createPlayer();
            break;
        case '2':
            this.deleterPlayer();
    }
    }
}
}

let menu = new Menu();
menu.start();