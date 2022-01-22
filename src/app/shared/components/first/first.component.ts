import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from 'src/app/core/services/constant.service';
import {
  generatedString,
  GeneratorFactory,
} from 'src/app/core/services/generator.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

import { Category } from '../../enums/categroy.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    {
      provide: ConstantService,
      useValue: {
        App: 'TaskManager',
        Ver: '1.0',
        API_URL: 'http://localhost:4200',
      },
    },
    {
      provide: generatedString,
      useFactory: GeneratorFactory(16),
      deps: [GeneratorService],
    },
    {
      provide: LocalStorageService,
      useValue: window.localStorage,
    },
  ],
})
export class FirstComponent implements OnInit {
  name: string = 'First Component';
  description: string = 'My First Component';
  price: number = 100;
  category: Category = Category.Digital;
  isAvailable: boolean = true;
  reviews: string[] = ['Hello world!', 'Excellent!', 'The best one!'];
  tags: string[] = ['Angular2+', 'Homework'];

  constructor(
    @Optional() private constantService: ConstantService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(generatedString) public generatedString: string,
    @Optional() private generatorService: GeneratorService,
    @Optional() private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.configOptionsService.setConfig({ id: 1, login: 'Maxim' });
    this.localStorage.setItem('state', 'saved');
  }

  get appInfo(): string {
    return JSON.stringify(this.constantService);
  }

  get configOptions(): string {
    return JSON.stringify(this.configOptionsService.getConfig());
  }

  get id(): number {
    return this.generatorService.getNewID();
  }

  get appName(): string {
    return this.localStorage.getItem('state');
  }
}
