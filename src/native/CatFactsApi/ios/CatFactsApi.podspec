=begin
    always check if validation passes with command

    pod spec lint src/native/CatFactsApi/ios/CatFactsApi.podspec --verbose

    as pods silently error out if there are mistakes in the *.podspec file
=end

Pod::Spec.new do |spec|
    spec.name             = "CatFactsApi"
    spec.version          = "1.0.0"
    spec.summary          = "Sleepingduck Cat facts API"
    spec.description      = "A native API that exposes the facts to the Ract-Native world for consumption"
    spec.authors          = { "Sleepingduck Team" => "team@sleepingduck.com.au" }
    spec.homepage         = "https://github.com/dittmarconsulting/CatFactsApi.git"
    spec.source           = { :git => "https://github.com/dittmarconsulting/CatFactsApi.git", :tag => "#{spec.version}" }
    spec.license          = { :type => "MIT" }
    spec.platforms        = { :ios => "12.0" }
    spec.source_files     = "src/**/*.{h,m,mm,swift}"
  
    spec.dependency 'React'
end