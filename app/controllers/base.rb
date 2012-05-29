D4Site.controllers :base do

  layout :base
  
  get :index, map: '/' do
    render "base/index"
  end
end