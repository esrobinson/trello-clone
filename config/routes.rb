TrelloClone::Application.routes.draw do
  resources :users, :only => [:new, :create, :show, :edit, :update]
  resources :boards do
    resources :board_memberships, :only => [:create]
  end

  resource :session, :only => [:new, :create, :destroy]

  root :to => "static_pages#index"
end
