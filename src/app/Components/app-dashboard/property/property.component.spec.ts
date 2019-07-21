import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyComponent } from './property.component';
import { SplitPipe } from '../../../Pipes/split.pipe';

describe('PropertyComponent', () => {
  let component: PropertyComponent;
  let fixture: ComponentFixture<PropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyComponent, SplitPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponent);
    component = fixture.componentInstance;
    component.property = {
      "position": [
        48.11836,
        11.63737
      ],
      "distance": 570,
      "title": "Hotel am Ostpark",
      "averageRating": 0,
      "icon": "https://download.vcdn.cit.data.here.com/p/d/places2_stg/icons/categories/01.icon",
      "vicinity": "Michaeliburgstraße 21<br/>81671 München",
      "type": "urn:nlp-types:place",
      having: [],
      "href": "https://places.cit.api.here.com/places/v1/places/276u2838-460068d1484541c18b9a978a07c51fc7;context=Zmxvdy1pZD00MGUxMDQ3OC1iNDk1LTUxOTgtOWRmYy1lNGEzNzUxOWE2MjJfMTU2Mzc0MzY0Njk5Ml8zOTNfNDQwOCZyYW5rPTA?app_id=SdTuhGMGwWWx6EFxDEmm&app_code=lmlX4F1r-Od90a1aZjqWsQ",
      "id": "276u2838-460068d1484541c18b9a978a07c51fc7",
      "category": {
        "id": "hotel",
        "title": "Hotel",
        "href": "https://places.cit.api.here.com/places/v1/categories/places/hotel?app_id=SdTuhGMGwWWx6EFxDEmm&app_code=lmlX4F1r-Od90a1aZjqWsQ",
        "type": "urn:nlp-types:category",
        "system": "places"
      },
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
