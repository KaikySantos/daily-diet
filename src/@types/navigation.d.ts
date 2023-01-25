export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealForm: {
        mealId?: string;
      };
      feedback: {
        type: 'positive' | 'negative'
      };
      meal: {
        mealId: string
      };
    }
  }
}