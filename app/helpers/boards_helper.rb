module BoardsHelper

  def is_member?(board)
    board.members.any?{ |member| member.id == current_user.id }
  end

end
