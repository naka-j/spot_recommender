Rails.application.routes.draw do
  root 'top#index'
  namespace :api, constraints: {format: 'json'} do
    namespace :v1 do
      resources :spots
      resources :messages
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
