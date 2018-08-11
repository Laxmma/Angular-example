import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {
  currentHero = {

    name: "Steven",
    power: 200
  };
   heroImageUrl = './assets/images/hero.jpg';
   formNotChanged = true;
   canSave = true;
  isUnchanged = false;
  isSpecial = false;
  
  classes =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  constructor() { }

  ngOnInit() {
  }
  getVal() {
    return 1;
  }
  getHeroImage() {
    // this.formNotChanged = false; // Un-comment me to see error in console.
    //getHeroImage() method is used in view to get the hero image. If we modify the value of formNotChanged property in this function we will get an error in console. We should not do like this.
    // getHeroImage() method should only return a value. It should not modify any other component property.
    return this.heroImageUrl;
  }

}
