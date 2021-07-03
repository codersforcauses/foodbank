export interface Welcome1 {
    descriptionArray: DescriptionArray[];
}

export interface DescriptionArray {
    id:          string;
    headerColor: 'primary' | 'orange';
    headerText:  string;
    captionText: string;
    showButton:  boolean;
    maxWidth:    string;
    maxHeight:   string;
}

export type HeaderColor = 'primary' | 'orange';
