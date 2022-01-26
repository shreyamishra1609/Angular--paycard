import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AppComponent } from './app.component';


let fixture;
let app: AppComponent;
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CalendarModule,
        CardModule,
        InputTextModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('should call enteredCardNum', () => {
    app.enteredCardNum({target:{value:77781737381973}});
    expect(app.cardNum).toBeDefined()

  });

  it('should call stringSplitter1', () => {
    app.stringSplitter("4444",{target:{value:4444 , keycode:0}});

  });

  it('should call stringSplitter2', () => {
    app.stringSplitter("444444444",{target:{value:4444444444444 , keycode:0}});

  });
  
  it('should call stringSplitter3', () => {
    app.stringSplitter("44444444444444",{target:{value:444444444 , keycode:0}});

  });

  it('should call stringSplitter1', () => {
    app.stringSplitter("4444",{keyCode:8});

  });
  
  it('should call enteredCardNum2', () => {
    app.enteredCardNum({target:{value:undefined}});
    expect(app.cardNum).toBe("XXXX XXXX XXXX XXXX")

  });

  it('should call enteredCardName', () => {
    app.enteredCardName({target:{value:"Shreya Mishra"}});
    expect(app.cardName).toBeDefined()

  });

  it('should call enteredCardName2', () => {
    app.enteredCardName({target:{value:undefined}});
    expect(app.cardName).toBe("FULL NAME")

  });

  it('should call expiryDate', () => {
    app.expiryDate();
    expect(app.cardDate).toBeDefined()

  });

});
