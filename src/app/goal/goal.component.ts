import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Goal } from "../goal";
import { GoalService } from '../goal-service/goal.service';
import {AlertService} from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService: AlertService;
  quote: Quote;

  constructor(goalService:GoalService, alertService:AlertService, private httpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

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
        this.alertService.alertMe("The goal has been removed")
      }
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  ngOnInit() {}
}
