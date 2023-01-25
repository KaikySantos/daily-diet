export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      mealForm: undefined;
      feedback: {
        type: 'positive' | 'negative'
      };
      meal: {
        mealId: string
      };
    }
  }
}