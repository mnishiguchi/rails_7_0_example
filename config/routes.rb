Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Almost every application defines a route for the root path ("/") at the top of this file.
  root "rooms#index"

  resources :rooms do
    resources :messages, only: %i[new create]
  end
end
