Rails.application.routes.draw do

  resources :responses
  resources :icebreakers
  resources :work_groups
  resources :users
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/new", to: "icebreakers#create"
    post "/icebreakers", to: "icebreaker#show"
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
