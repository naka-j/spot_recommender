Rails.application.routes.draw do
  root 'top#index'
  namespace :api do
    namespace :v1 do
      resources :spots
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
