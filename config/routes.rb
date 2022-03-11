Rails.application.routes.draw do


    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/new", to: "icebreakers#create"
    get "/icebreakers", to: "icebreakers#index"
    post "/responses", to: "responses#create"
    get '/icebreakers/:id', to: "icebreaker#show"
    put '/icebreakers/:id/update', to: "icebreakers#update"
    patch '/responses/:id/update', to: "response#update"
    root 'icebreakers/'
    resources :icebreakers
    resources :work_groups
    resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
