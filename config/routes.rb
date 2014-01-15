TrelloClone::Application.routes.draw do
  resources :users, :only => [:new, :create, :show, :edit, :update]

  resource :session, :only => [:new, :create, :destroy]

  root :to => "static_pages#index"
end