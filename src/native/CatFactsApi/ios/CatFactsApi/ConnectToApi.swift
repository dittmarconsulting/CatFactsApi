import Foundation
import React

@objc(CatFactsApi)
class CatFactsApi: NSObject {

  @objc
  func getValue(
    _ apiUrl: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock
  ) {

    if let url = URL(string: apiUrl) {

      let task = URLSession.shared.dataTask(with: url) { data, response, error in

        if let error = error {
          reject("NETWORK_ERROR", "Failed to fetch data", error)
          return
        }

        guard let data = data else {
          reject("NO_DATA", "No data returned", nil)
          return
        }

        // Parse the JSON response
        do {
          if let json = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
          {
            resolve(json)
          } else {
            reject("INVALID_RESPONSE", "Could not retrieve cat fact", nil)
          }
        } catch {
          reject("JSON_PARSING_ERROR", "Error parsing JSON", error)
        }
      }

      task.resume()

    } else {
      let error = NSError(
        domain: "com.example.catfact", code: 1001,
        userInfo: [
          NSLocalizedDescriptionKey: "The URL is invalid."
        ])

      reject("INVALID_URL", "URL is invalid", error)
    }
  }
}