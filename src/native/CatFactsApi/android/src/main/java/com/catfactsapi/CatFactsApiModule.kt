package com.catfactsapi

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import kotlinx.coroutines.*
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL


class CatFactsApiModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CatFactsApi"
    }

    @ReactMethod
    fun getValue(apiUrl: String, promise: Promise) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                if(!isValidUrl(apiUrl)) {
                    promise.reject("URL is invalid")
                }

                val url = URL(apiUrl)
                val urlConnection = url.openConnection() as HttpURLConnection
                try {
                    val bufferedReader = urlConnection.inputStream.bufferedReader()
                    val response = bufferedReader.use { it.readText() }

                    val jsonObject = JSONObject(response)

                    val result: WritableMap = Arguments.createMap()
                    jsonObject.keys().forEach {
                        result.putString(it, jsonObject.getString(it))
                    }

                    promise.resolve(result)
                } finally {
                    urlConnection.disconnect()
                }
            } catch (e: Exception) {
                promise.reject("NETWORK_ERROR", e)
            }
        }
    }

    private fun isValidUrl(url:String): Boolean {
        try {
            URL(url);
            return true
        } catch (e: Exception) {
            return false
        }
    }
}