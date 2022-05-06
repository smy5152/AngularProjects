import { Component } from '@angular/core';
// import { randomInt } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-generator';
  newMemberName = "";
  members: string[] = [];
  errorMessage = ""
  numberOfTeams: number | "" = ""
  teams: string[][] = []

  onNumberOfTeamsInput(numberOfTeamsInput: string) {
    this.numberOfTeams = Number(numberOfTeamsInput)
  }

  onInput(addMemberInput: string) {
    this.newMemberName = addMemberInput
  }

  addMember() {
    if (this.newMemberName == "") {
      this.errorMessage = "Name can't be empty"
      return
    }

    this.errorMessage = ""
    this.members.push(this.newMemberName)
    this.newMemberName = ""
  }

  generateTeams() {
    this.teams=[]
    
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid Number of Teams"
      return
    }

    if (this.members.length < Number(this.numberOfTeams)) {
      this.errorMessage = "Not enough Members"
      return
    }

    const allMembers = [...this.members]
    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0]

        if(!member) break
        
        if (this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }

    this.errorMessage = ""
    this.numberOfTeams = 0
    this.members=[]
    // this.teams=[]
  }
}


