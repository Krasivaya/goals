import { Component, OnInit } from "@angular/core";
import { Goal } from "../goal";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, "Emoji Movie", "Cartoon movie", new Date(2019, 9, 14)),
    new Goal(2, "ALita", "Marvel movie", new Date(2019, 10, 9)),
    new Goal(3, "US", "Horror movie", new Date(2019, 11, 14)),
    new Goal(4, "Men In Black", "Fantasy movie", new Date(2019, 8, 31))
  ];
  details(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );
      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  constructor() {}

  ngOnInit() {}
}
