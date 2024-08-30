#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CatFactsApi, RCTEventEmitter)

RCT_EXTERN_METHOD(getValue: (NSString *)apiUrl resolve: (RCTPromiseResolveBlock)resolve reject: (RCTPromiseRejectBlock)reject)

@end