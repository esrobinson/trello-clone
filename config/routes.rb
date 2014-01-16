TrelloClone::Application.routes.draw do
  resources :users, :only => [:new, :create, :show, :edit, :update]
  resources :boards do
    resources :board_memberships, :only => [:create]
    resources :board_admins, :only => [:create]
    resources :lists, :only => [:create, :new]
  end
  resources :lists, :only => [:show, :edit, :update, :destroy] do
    resources :cards, :only => [:create, :new]
  end
  resources :cards, :only => [:show, :edit, :update, :destroy]

  resource :session, :only => [:new, :create, :destroy]

  root :to => "static_pages#index"
end
